import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: `GameDrive's Docs`,
  tagline: `GameDrive's Official Documentation`,
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.gamedrive.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kktech', // Usually your GitHub org/user name.
  projectName: 'gamedrive', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false, // Optional: disable blog
        // pages: false, // Optional: disable static pages
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: 'GameDrive',
      logo: {
        alt: 'GameDrive Logo',
        src: 'img/gamedrive-logo.png',
      },
      items: [{
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Docs',
      },
      {
        type: 'doc',
        docId: 'api/intro',
        position: 'left',
        label: 'API',
      },
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
      },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Main Website',
              href: 'https://www.gamedrive.cc',
            },
            {
              label: 'Console',
              href: 'https://console.gamedrive.cc',
            },
            {
              label: 'Comminity',
              href: 'https://www.gamedrive.cc/community',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GameDrive.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
