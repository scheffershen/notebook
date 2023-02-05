Move-your-WordPress-site-to-another-domain
==========================================

Step 1 - Verify that your current site is working
Step 2 - Download the files of your website
Step 3 - Export your database
Step 4 - Upload files to your new domain
Step 5 - Import your database

Step 6 - Go to wp_options
	In wp_options, locate siteurl and home.

Step 7 - Update siteurl and home
Step 8 - Update connection details in wp-config
Step 9 - Check your site on your new domain

Step 10 - Fix permalinks (Optional)
	Log in to your WordPress dashboard.
		Click Settings and then Permalinks
		Scroll down and click Save Changes.

Step 11 - Fix broken images (Optional)
	Log in to your WordPress dashboard.
		Click Plugins and then Add new.
		Search for Better Search Replace and install the plugin with that name.
		Click Activate to make the plugin active.
		Click Tools and Better Search Replace.
		Search for the old domain name and Replace with the new domain name.
		Select the tables that you want to search in. Your posts are located in the table wp_posts, but usually you can safely select all tables.
		Uncheck the box for Run as dry and click Run Search/Replace. If you want to do a test run before making changes, leave the box for Run as dry checked.

Step 12 - Check your site again (Optional)

