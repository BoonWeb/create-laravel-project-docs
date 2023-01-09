import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/create-laravel-project-docs/',
  lang: 'en-US',
  title: 'Create Laravel Project',
  description: 'Start a fresh laravel project in a few minutes with this setup wizard.',

  theme: defaultTheme({
    logoDark: 'https://boonweb.de/img/boonweb-logo-white.webp',
    logo: 'https://boonweb.de/img/boonweb-logo.webp',

    lastUpdated: true,
    contributors: false,

    themePlugins: {
      backToTop: true,
    },

    colorMode: 'light',

    sidebar: 'auto',
    editLink: true,
    editLinkText: 'Edit this page on Github',

    repo: 'boonweb/create-laravel-project',
    docsBranch: 'main',

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Getting Started',
        link: '/guide/',
      },
      {
        text: 'BoonWeb GmbH',
        link: 'https://boonweb.de',
      },
    ],
  })
})
