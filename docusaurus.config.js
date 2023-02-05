// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Notes',
  tagline: 'My notes for learning and working',
  url: 'https://scheffershen.github.io',
  baseUrl: '/notebook',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scheffeshen', // Usually your GitHub org/user name.
  projectName: 'notebook', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scheffershen/notebook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scheffershen/notebook/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My notes',
        logo: {
          alt: 'My notes',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://scheffershen.github.io/online-cv', label: 'CV', position: 'left'},
          /*{
            href: 'https://github.com/scheffershen/notebook',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "My notes",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/scheffershen",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/shen-yi-333611b/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/scheffer_shen",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "PayPal",
                href: "https://paypal.me/yishen1963?country.x=FR&locale.x=fr_FR",
              },
              {
                label: "CV",
                href: `https://scheffershen.github.io/online-cv/`,
              },
            ],
          },
        ],
        copyright: `My notes, Built with Docusaurus.`,
      },      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
