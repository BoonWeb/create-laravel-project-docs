import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/create-laravel-project/',
  lang: 'en-US',
  title: 'Create Laravel Project',
  description: 'Start a fresh laravel project in a few minutes with this laravel install wizard.',

  // theme: 'antdocs',
  theme: defaultTheme({
    repo: 'boonweb/create-laravel-project',
    docsBranch: 'main',

    logoDark: 'https://boonweb.de/img/boonweb-logo-white.webp',
    logo: 'https://boonweb.de/img/boonweb-logo.webp',

    sidebar: 'auto',
    editLink: true,
    editLinkText: 'Edit this page on Github',

    lastUpdated: true,
    contributors: true,

    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'BoonWeb GmbH',
        link: 'https://boonweb.de',
      },
    ],
  })
})
