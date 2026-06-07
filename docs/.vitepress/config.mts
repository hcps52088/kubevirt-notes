import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KubeVirt 學習筆記',
  description: '在 Kubernetes 上運行虛擬機 — 架構、安裝、VM 管理、Storage、Networking、Live Migration',
  base: '/kubevirt-notes/',
  lang: 'zh-TW',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'KubeVirt 學習筆記',

    nav: [
      { text: '首頁', link: '/' },
      {
        text: '學習章節',
        items: [
          { text: '第一章 架構原理', link: '/01-architecture/' },
          { text: '第二章 安裝與設定', link: '/02-installation/' },
          { text: '第三章 虛擬機管理', link: '/03-virtual-machines/' },
          { text: '第四章 Storage', link: '/04-storage/' },
          { text: '第五章 Networking', link: '/05-networking/' },
          { text: '第六章 Live Migration', link: '/06-live-migration/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/hcps52088/kubevirt-notes' },
    ],

    sidebar: [
      {
        text: '開始學習',
        items: [
          { text: '首頁', link: '/' },
        ]
      },
      {
        text: '第一章 架構原理',
        collapsed: false,
        items: [
          { text: '架構概覽', link: '/01-architecture/' },
        ]
      },
      {
        text: '第二章 安裝與設定',
        collapsed: false,
        items: [
          { text: '安裝 KubeVirt', link: '/02-installation/' },
        ]
      },
      {
        text: '第三章 虛擬機管理',
        collapsed: false,
        items: [
          { text: 'VM 與 VMI', link: '/03-virtual-machines/' },
        ]
      },
      {
        text: '第四章 Storage',
        collapsed: false,
        items: [
          { text: 'Disk & Volume 類型', link: '/04-storage/' },
        ]
      },
      {
        text: '第五章 Networking',
        collapsed: false,
        items: [
          { text: 'Interface & Network', link: '/05-networking/' },
        ]
      },
      {
        text: '第六章 Live Migration',
        collapsed: false,
        items: [
          { text: 'Live Migration', link: '/06-live-migration/' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hcps52088/kubevirt-notes' }
    ],

    footer: {
      message: '基於 KubeVirt 官方文件整理',
      copyright: 'Copyright © 2026 hcps52088'
    },

    editLink: {
      pattern: 'https://github.com/hcps52088/kubevirt-notes/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁'
    },

    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    outline: {
      label: '本頁目錄',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },

    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '深色模式',
  },

  markdown: {
    lineNumbers: true,
  },

  lastUpdated: true,
})
