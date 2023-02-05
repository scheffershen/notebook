How to Use Voters to Check User Permissions
===========================================

## How Symfony Uses Voters

All voters are called each time you use the `isGranted()` method on Symfony's authorization checker or call `denyAccessUnlessGranted()` in a controller

## The Voter Interface

A custom voter needs to implement `VoterInterface` or extend `Voter`, which makes creating a voter even easier:

```php
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\VoterInterface;

abstract class Voter implements VoterInterface
{
    abstract protected function supports($attribute, $subject);
    abstract protected function voteOnAttribute($attribute, $subject, TokenInterface $token);
}
```

## Setup: Checking for Access in a Controller

Suppose you have a `Post` object and you need to decide whether or not the current user can edit or view the object. In your controller, you'll check access with code like this:

```php
// src/Controller/PostController.php
// ...

class PostController extends AbstractController
{
    /**
     * @Route("/posts/{id}", name="post_show")
     */
    public function show($id)
    {
        // get a Post object - e.g. query for it
        $post = ...;

        // check for "view" access: calls all voters
        $this->denyAccessUnlessGranted('view', $post);

        // ...
    }

    /**
     * @Route("/posts/{id}/edit", name="post_edit")
     */
    public function edit($id)
    {
        // get a Post object - e.g. query for it
        $post = ...;

        // check for "edit" access: calls all voters
        $this->denyAccessUnlessGranted('edit', $post);

        // ...
    }
}
```

The denyAccessUnlessGranted() method (and also the isGranted() method) calls out to the "voter" system. Right now, no voters will vote on whether or not the user can "view" or "edit" a Post. But you can create your own voter that decides this using whatever logic you want.

## Creating the custom Voter

Suppose the logic to decide if a user can "view" or "edit" a Post object is pretty complex. For example, a User can always edit or view a Post they created. And if a Post is marked as "public", anyone can view it. A voter for this situation would look like this:

```php
// src/Security/PostVoter.php
namespace App\Security;

use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class PostVoter extends Voter
{
    // these strings are just invented: you can use anything
    const VIEW = 'view';
    const EDIT = 'edit';

    protected function supports($attribute, $subject)
    {
        // if the attribute isn't one we support, return false
        if (!in_array($attribute, [self::VIEW, self::EDIT])) {
            return false;
        }

        // only vote on `Post` objects
        if (!$subject instanceof Post) {
            return false;
        }

        return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            // the user must be logged in; if not, deny access
            return false;
        }

        // you know $subject is a Post object, thanks to `supports()`
        /** @var Post $post */
        $post = $subject;

        switch ($attribute) {
            case self::VIEW:
                return $this->canView($post, $user);
            case self::EDIT:
                return $this->canEdit($post, $user);
        }

        throw new \LogicException('This code should not be reached!');
    }

    private function canView(Post $post, User $user)
    {
        // if they can edit, they can view
        if ($this->canEdit($post, $user)) {
            return true;
        }

        // the Post object could have, for example, a method `isPrivate()`
        return !$post->isPrivate();
    }

    private function canEdit(Post $post, User $user)
    {
        // this assumes that the Post object has a `getOwner()` method
        return $user === $post->getOwner();
    }
}
```

## Checking for Roles inside a Voter¶

What if you want to call *isGranted()* from inside your voter - e.g. you want to see if the current user has `ROLE_SUPER_ADMIN`. That's possible by injecting the *Security* into your voter. You can use this to, for example, always allow access to a user with `ROLE_SUPER_ADMIN`:

```php
// src/Security/PostVoter.php

// ...
use Symfony\Component\Security\Core\Security;

class PostVoter extends Voter
{
    // ...

    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        // ...

        // ROLE_SUPER_ADMIN can do anything! The power!
        if ($this->security->isGranted('ROLE_SUPER_ADMIN')) {
            return true;
        }

        // ... all the normal voter logic
    }
}
```

If you're using the default *services.yaml* configuration, you're done! Symfony will automatically pass the *security.helper* service when instantiating your voter (thanks to autowiring).

All classes are automatically registered as services and configured to be autowired.

## Changing the Access Decision Strategy

Normally, only one voter will vote at any given time (the rest will "abstain", which means they return *false* from *supports()*). But in theory, you could make multiple voters vote for one action and object. For instance, suppose you have one voter that checks if the user is a member of the site and a second one that checks if the user is older than 18.

To handle these cases, the access decision manager uses a "strategy" which you can configure. There are three strategies available:

- *affirmative* (default), This grants access as soon as there is one voter granting access;
- *consensus*, This grants access if there are more voters granting access than denying;
- *unanimous*, This only grants access if there is no voter denying access. If all voters abstained from voting, the decision is based on the *allow_if_all_abstain* config option (which defaults to *false*).

In the above scenario, both voters should grant access in order to grant access to the user to read the post. In this case, the default strategy is no longer valid and *unanimous* should be used instead. You can set this in the security configuration:

```yaml
# config/packages/security.yaml
security:
    access_decision_manager:
        strategy: unanimous
        allow_if_all_abstain: false
```