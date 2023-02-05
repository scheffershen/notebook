Docusaurus
==========

## Scaffold project website

	$ npx create-docusaurus@latest my-website classic

	$ npx create-docusaurus@latest my-website classic --typescripts

	$ npx create-docusaurus@latest --help

	$ npx docusaurus --version

## Project structure

my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock

- /blog/ - Contains the blog Markdown files
- /docs/ - Contains the Markdown files for the docs. Customize the order of the docs sidebar in sidebars.js
- /src/ - Non-documentation files like pages or custom React components. 
	+ /src/pages - Any JSX/TSX/MDX file within this directory will be converted into a website page.
- /static/ - Static directory. Any contents inside here will be copied into the root of the final build directory
- /docusaurus.config.js - A config file containing the site configuration. 
- /package.json - A Docusaurus website is a React app.
- /sidebars.js - Used by the documentation to specify the order of documents in the sidebar

## Running the development server, and Build

	$ cd my-website
	$ npm run start
	$ npm run build

## Configuration

- https://docusaurus.io/docs/configuration


## Resources

- https://docusaurus.io/docs

## Comparison with other tools

- Gatsby:  
	+ GraphQL is also pretty core to Gatsby.
- Next.js
	+ Next.js is another very popular hybrid React framework.
- VuePress
	+ VuePress is powered by Vue, while Docusaurus is powered by React.
- MkDocs
	+ MkDocs is a popular Python static site generator with value propositions similar to Docusaurus.
- Docsify => uses VueJs
- GitBook
- Jekyll => uses Ruby (gem)

## Deploy Docusaurus website to GitHub Pages using GitHub Actions

Configuring the GitHub repository

It uses the new `GitHub Pages` experience with `GitHub Actions` to deploy the website.

Enable this experience in `GitHub.com` -> `Repository` -> `Settings` -> `Pages` -> `Build and deployment` -> `Source` by selecting `GitHub Actions` instead o`f the legacy `Deploy from a branch` option.

In `GitHub.com` -> `Repository` -> `Settings` -> `Environments` you should see a GitHub Environment named `github-pages`.

