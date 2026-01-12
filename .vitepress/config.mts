import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gray Meadows",
  description: "super over-engineered GTK desktop shell made in Rust and C++",
  srcDir: './src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/installation' },
      { text: 'Showcase', link: '/showcase' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Showcase', link: '/showcase' },
          { text: 'Installation', link: '/installation' },
          { text: 'IPC', link: '/ipc' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Inparsian'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Inparsian/gray-meadows-shell' }
    ]
  }
})
