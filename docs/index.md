# KubeVirt 學習筆記

KubeVirt 讓你在 Kubernetes 上直接**運行虛擬機（VM）**，把 VM 當成 Pod 一樣管理。不再需要分開維護 vSphere / KVM 叢集和 k8s 叢集——一套 API 統一管理容器和 VM。

## 適合場景

- 有**無法容器化的舊應用**（需要特定 OS 內核、驅動、授權）
- **逐步遷移**：先把 VM 搬進 k8s，再慢慢改造成 container
- **混合工作負載**：容器和 VM 共用同一套網路、儲存、調度資源
- **開發測試**：快速開出各種 OS 環境的 VM 做測試

## 學習路徑

| 章節 | 主題 | 重點 |
|------|------|------|
| 第一章 | [架構原理](01-architecture/index.md) | 元件職責、VM 如何跑在 k8s 上 |
| 第二章 | [安裝與設定](02-installation/index.md) | Operator 安裝、virtctl、驗證 |
| 第三章 | [虛擬機管理](03-virtual-machines/index.md) | VMI / VM / InstanceType、生命週期 |
| 第四章 | [Storage](04-storage/index.md) | Disk 類型、Volume 來源、DataVolume |
| 第五章 | [Networking](05-networking/index.md) | Interface 類型、Multus、SR-IOV |
| 第六章 | [Live Migration](06-live-migration/index.md) | 遷移原理、策略、Migration Policy |

## KubeVirt vs 傳統虛擬化

| | 傳統（vSphere/KVM） | KubeVirt |
|--|---------------------|----------|
| 管理介面 | vCenter / virsh | kubectl / virtctl |
| 調度 | DRS | k8s Scheduler |
| 網路 | vSwitch / OVN | k8s CNI + Multus |
| 儲存 | vSAN / Ceph | PVC / CSI |
| 監控 | vROps | Prometheus + Grafana |
| API | 私有 API | Kubernetes API（CRD） |
