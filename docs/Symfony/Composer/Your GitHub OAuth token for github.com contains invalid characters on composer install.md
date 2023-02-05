Your GitHub OAuth token for github.com contains invalid characters on composer install
=====================================================================================

##  nano ~/.composer/auth.json

You can try Basic Auth instead:

Change this (oauth):

```json
{
  "github-oauth": {
    "github.com": "ghp_[YOUR-PERSONAL-TOKEN]"
  }
}
```

To this (basic auth):

```json
{
  "http-basic": {
    "github.com": {
      "username": "[YOUR-GITHUB-USERNAME]",
      "password": "ghp_[YOUR-PERSONAL-TOKEN]"
    }
  }
}
```