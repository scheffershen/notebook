wordpress-development-and-deployment-workflow
=============================================

It is also important to think of your WordPress project as three separate pieces:

- Code 
- Database
- Media Files (or “Uploads”)

## Code goes up, Database and Media Files go down

Just about everything that is managed in the WordPress admin area (

- posts, 
- pages, 
- plugin and 
- theme settings) gets saved in the database.

For example, if you have the default WordPress `Twenty Twenty` theme active on your Production environment, but only have the “Twenty Twenty One” theme installed on your Local, when you migrate the database and media files from Production to Local, you will get a white screen on your local, or if you have WP_DEBUG set to `true`, you might see a warning that says `The theme TwentyTwenty does not exist.`

The `wp-content` folder is the directory where you should make and keep all custom aspects of your WordPress installation. This includes the `plugins`, `mu-plugins`, `themes`, and `uploads directories`. Other commercial and community plugins also tend to make use of this directory as well to store generated PHP, JS, JSON, or media files needed by their plugins.

## Step 3: Migrate your database and media files from Production to Local

## WP Migrate DB Pro plugin

## Step 4: Put your Local code under version control and create a remote repository

DO NOT overwrite or track your wp-config.php file!