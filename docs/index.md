---
layout: home

hero:
  name: "KubeVirt"
  text: "學習筆記"
  tagline: 在 Kubernetes 上統一管理容器與虛擬機
  actions:
    - theme: brand
      text: 開始學習
      link: /01-architecture/
    - theme: alt
      text: GitHub
      link: https://github.com/hcps52088/kubevirt-notes

features:
  - icon: 🏗️
    title: 第一章 架構原理
    details: virt-api、virt-controller、virt-handler、virt-launcher 元件職責，以及 VM 在 k8s 上的完整啟動流程
    link: /01-architecture/
  - icon: ⚙️
    title: 第二章 安裝與設定
    details: KubeVirt Operator 安裝、CDI 配置、virtctl CLI 工具，以及 KubeVirt CR 的所有設定選項
    link: /02-installation/
  - icon: 💻
    title: 第三章 虛擬機管理
    details: VM vs VMI 差異、RunStrategy、InstanceType、Cloud-Init 初始化、Snapshot 備份還原
    link: /03-virtual-machines/
  - icon: 💾
    title: 第四章 Storage
    details: 10 種 Volume 來源、4 種 Disk 類型、DataVolume 自動 import、熱插拔磁碟
    link: /04-storage/
  - icon: 🌐
    title: 第五章 Networking
    details: masquerade / bridge / SR-IOV / passt binding、Multus 多網路介面、外部存取方式
    link: /05-networking/
  - icon: 🚀
    title: 第六章 Live Migration
    details: Pre-copy / Post-copy / Auto-converge 三種遷移策略、MigrationPolicy 細粒度控制
    link: /06-live-migration/
---
