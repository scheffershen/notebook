GitHub-Release
==============

Releases are deployable software.

Releases are based on Git tags,

You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template.

## Creating a release

To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

    $ gh release create TAG

For example, this command creates a prerelease with the specified title and notes.

    $ gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease

Releases cannot currently be edited with GitHub CLI.

## Deleting a release

    $ gh release delete TAG -y