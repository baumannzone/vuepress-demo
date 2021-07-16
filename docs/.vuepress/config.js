const { description } = require('../../package')

module.exports = {
  base: '/vuepress-demo/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Demo',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Docs the right way',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    lineNumbers: true
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'baumannzone/vuepress-demo',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'main',
    docsRepo: 'https://github.com/baumannzone/vuepress-demo',
    editLinkText: 'Help us improve this page!',
    lastUpdated: description,

    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Page 1',
        link: '/page-1/',
      },
      {
        text: 'Page 2',
        link: '/page-2/'
      },
      {
        text: 'Page 3',
        link: '/page-3/'
      },
      {
        text: 'Instagram',
        link: 'https://instagram.com/baumannzone'
      }
    ],
    sidebar: {
      '/page-1/': [
        {
          title: 'Page 1',
          collapsable: false,
          children: [
            '',
            'using-vue',
            'sub-page',
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
