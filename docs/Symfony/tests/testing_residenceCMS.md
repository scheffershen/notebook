# ResidenceCMS Testing

## Testing

- WebTestCase (`Application Tests`)
- Controller
    + Admin
        - UserControllerTest extends WebTestCase
            * testAdminNewUser()
            * testUserPermissions()
            * testAdminEditUser()
            * testAdminPermissions()
            * testAdminDeleteUser()
    + User
        - PhotoControllerTest extends WebTestCase
            * testEditingForbidden()
            * testUploadPhoto()
            * testDeletePhoto()
- $client = static::createClient()
    * $crawler = $client->request()
    * $form = $crawler->selectButton('Create user')->form()
    * $form['file']->upload($photo);
    * $client->submit($form);
    * $client->getContainer()->get('doctrine')->getRepository(User::class)->findOneBy()

## .env.test

ResidenceCMS

```
# define your env variables for the test env here
KERNEL_CLASS='App\Kernel'
APP_SECRET='$ecretf0rt3st'
SYMFONY_DEPRECATIONS_HELPER=999999
PANTHER_APP_ENV=panther

DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
```
