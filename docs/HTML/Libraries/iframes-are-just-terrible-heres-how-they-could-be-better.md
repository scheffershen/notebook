iframes-are-just-terrible-heres-how-they-could-be-better
===

- https://medium.com/@bluepnume/iframes-are-just-terrible-heres-how-they-could-be-better-974b731f0fb4
- https://github.com/krakenjs/zoid

## Zoid

A cross-domain component toolkit, supporting:

- Render an iframe or popup on a different domain, and pass down props, including objects and functions
- Call callbacks natively from the child window without worrying about post-messaging or cross-domain restrictions
- Create and expose components to share functionality from your site to others!
Render your component directly as a React, Vue or Angular component!
- It's 'data-down, actions up' style components, but 100% cross-domain using iframes and popups!

## Quick example

Define a component to be on both the parent and child pages:

```js
var MyLoginComponent = zoid.create({
    tag: 'my-login-component',
    url: 'http://www.my-site.com/my-login-component'
});
```

Render the component on the parent page:

```js
<div id="container"></div>

<script src="script-where-my-login-component-is-defined.js"></script>
<script>
    MyLoginComponent({

        prefilledEmail: 'foo@bar.com',

        onLogin: function(email) {
            console.log('User logged in with email:', email);
        }

    }).render('#container');
</script>
```

Implement the component in the iframe:

```html
<input type="text" id="email" />
<input type="password" id="password" />
<button id="login">Log In</button>

<script src="script-where-my-login-component-is-defined.js"></script>
<script>
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var button = document.querySelector('#login');

    email.value = window.xprops.prefilledEmail;

    function validUser (email, password) {
      return email && password;
    }

    button.addEventListener('click', function() {
        if (validUser(email.value, password.value)) {
            window.xprops.onLogin(email.value);
        }
    });
</script>
```



