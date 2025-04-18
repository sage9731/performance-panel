# Performance Panel

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

中文 | [English](./README-EN.md)

此项目为 Wallpaper Engine 的网页壁纸，展示 [AIDA64](https://www.aida64.com/downloads) 和 [Riva Tuner Statistics Server](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/) 提供的性能数据，并且可以响应音频，识别当前播放的媒体。

在 Steam 创意工坊中订阅 [Performance Panel](https://steamcommunity.com/sharedfiles/filedetails/?id=3465632551) .

<img src="./assets/screenshot.gif" alt="screenshot">

# 使用方法

## 安装 AIDA64 并启用 Remote Sensor

1. 下载并安装 [AIDA64](https://www.aida64.com/downloads)
2. 运行AIDA64，打开设置，设置开机自启动、最小化和关闭时最小化到任务通知区域，关闭启动时的欢迎画面，当AIDA64启动时最小化到任务通知区域，确保 AIDA64 开机后可以后台运行
   
   <img src="./assets/aida64-zh-1.png" alt="">

3. 切换到LCD设置，找到 Remote Sensor，修改 TCP/IP 端口为 32100，勾选启用RemoteSensor LCD支持，应用设置后提示“RemoteSensor Init OK”
   
   <img src="./assets/aida64-zh-2.png" alt="">

4. 切换到LCD-LCD项目，下载并导入 [performance-panel-lcd.rslcd](./public/performance-panel-lcd.rslcd) 文件并应用
   
   <img src="./assets/aida64-zh-3.png" alt="">

## 安装 Riva Tuner Statistics Server (RTSS)

> Note: 如果不想看帧数的话，可以不用安装 RTSS

1. 下载并安装 [Riva Tuner Statistics Server](https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/)

2. 运行并勾选 Start With Windows ，点击最小化按钮使其在后台运行

## 应用 Wallpaper Engine 壁纸

在 Wallpaper Engine 的 Steam 创意工坊中订阅 [Performance Panel](https://steamcommunity.com/sharedfiles/filedetails/?id=3464821056)，即可开始享用

# 常见问题

### 问：为什么无法显示数据？

> 答：请检查 AIDA64 是否正在后台运行，且开启了 RemoteSensor。如果均检查无误，可以修改 Remote Sensor 端口后，在 Wallpaper Engine 的本壁纸设置中修改端口重试。

### 问: 为什么有的数据显示错误？

> 答： 不同的电脑中，AIDA64 监控的项目会有所不同，需要在 LCD 项目中手动选择对应的监控项进行修改。注意在修改的时候，请保持项目的顺序不变，不要新建、删除、移动项目。

<img src="./assets/aida64-zh-4.png" />

### 问：为什么 FPS 未显示？

> 答：请检查 Riva Tuner Statistics Server 是否已安装且正在运行。如果确认 RTSS 正在运行，打开游戏且游戏处于前台运行后仍未显示 FPS 数据的话，则可能是 RTSS 不支持该游戏。

### 问：为什么未识别到当前正在播放的媒体？

> 答：只有接入了 SMTC 的媒体播放软件才能够被识别。网易云音乐可以安装 [BetterNCM PC版 NCM 客户端插件管理器](https://microblock.cc/betterncm) 解决。

### 问：为什么音频响应的幅度那么小？

> 答：原因不详。可以在 Wallpaper Engine 的设置中调整录音音量或者本壁纸的设置中设置音频响应增强。
