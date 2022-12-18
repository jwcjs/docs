import { defineConfig } from 'vitepress'

export default defineConfig({

  lang: "zh-CN",
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
      { text: 'Guide', link: '/guide/' },
    ],

    footer: {
      message: 'Made with ❤️ by Wibus and AkaraChen',
      copyright: 'Copyright © 2022-PRESENT Jwc.js',
    },
  },
})