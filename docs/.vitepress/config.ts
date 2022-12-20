import { defineConfig } from 'vitepress'

export default defineConfig({

  title: "Jwc.js",
  description: "A JavaScript framework for using JSX to write web components on the web.",
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: `wibus-wee, AkaraChen contributors` }],
    ['meta', { name: 'keywords', content: 'typescript, node, jwcjs, web-component, web-component-framework' }],
    ['meta', { property: 'og:title', content: "Jwc.js" }],
    ['meta', { property: 'og:description', content: "A JavaScript framework for using JSX to write web components on the web." }],
    ['meta', { property: 'og:url', content: "https://jwc.js.org" }],
    ['meta', { property: 'og:image', content: "/social-media.png" }],
    ['meta', { name: 'twitter:title', content: "Jwc.js" }],
    ['meta', { name: 'twitter:description', content: "A JavaScript framework for using JSX to write web components on the web." }],
    ['meta', { name: 'twitter:image', content: "/social-media.png" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    editLink: {
      pattern: "https://github.com/jwcjs/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
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
            text: 'What is Jwc?',
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
        {
          text: 'Describing the UI', items: [{
            text: 'JSX',
            link: '/jsx/overview',
          }, {
            text: 'Writing JSX',
            link: '/jsx/writing-jsx',
          }]
        },
        {
          text: 'Publish component library', items: [{
            text: 'TypeScript',
            link: '/publish/typescript'
        }]}
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

    // algolia: {
    //   indexName: 'jwcjs_docs',
    //   appId: "DXY8DN63UX",
    //   apiKey: "cc4bb51bcbc8bdd9f1e7e02876e64260",
    // }
  },

  vue: {
    template: {
      compilerOptions: {
        // @ts-ignore
        isCustomElement: (tag) => tag.startsWith('jwc-'),
      }
    }
  }
})