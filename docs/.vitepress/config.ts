import { defineConfig } from 'vitepress'

export default defineConfig({

  title: "Jwc.js",
  description: "A JavaScript framework for using JSX to write web components on the web.",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",

    editLink: {
      pattern: "https://github.com/jwcjs/docs/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    nav: [
      { text: 'Guide', link: '/guide/quick-start', activeMatch: '^/guide/' },
      { text: 'Components', link: '/components/defining', activeMatch: '^/components/' },
      { text: 'About', activeMatch: '^/about/', items: [{
        text: 'FAQ',
        link: '/about/faq',
      }, {
        text: 'Maintainers Team',
        link: '/about/team',
      }] },
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started', items: [{
            text: 'Introduction',
            link: '/guide/what-is-jwc',
          }, {
            text: 'Quick Start',
            link: '/guide/quick-start',
          }]
        },
        {
          text: 'Components', items: [{
            text: 'Defining',
            link: '/components/defining',
          }, {
            text: 'Rendering',
            link: '/components/rendering',
          }, {
            text: 'Reactive properties',
            link: '/components/reactive-properties',
          }, {
            text: 'Styles',
            link: '/components/styles',
          }, {
            text: 'Lifecycle',
            link: '/components/lifecycle',
          },],
        },
      ]
    },

    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/jwcjs/core',
    }],

    footer: {
      message: 'Made with ❤️ by Wibus and AkaraChen',
      copyright: 'Copyright © 2022-PRESENT Jwc.js',
    },
  },
})