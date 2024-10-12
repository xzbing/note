---
title: 前端配置指南
date: 2024-5-8
categories: 说明书
tags: 说明书
sticky: 1
---

### 安装 nvm

### 通过管理员权限的打开 cmd

```
nvm list available（查看可在线安装的 NodeJS 版本）

nvm install <version>（安装指定版本的 Node.js）

nvm use <version>（切换到指定版本的 Node.js）

nvm ls 或 nvm list（列出已安装的所有 Node.js 版本）

nvm current（显示当前正在使用的 Node.js 版本）

nvm unalias <name>（删除指定版本的别名）

nvm uninstall <version>（卸载指定的 Node.js 版本）

nvm reinstall-packages <version>（重新安装指定版本的 Node.js，并将全局包重新安装到新版本中）
```

### 使用 npm 安装 pnpm

```
npm install -g pnpm

npm : 无法将“npm”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。

方法 : 重启 vscode
```

```
pnpm : 无法加载文件 C:\Program Files\nodejs\pnpm.ps1，因为在此系统上禁止运行脚本。

1.以管理员身份运行 PowerShell：在 Windows 搜索栏中输入“PowerShell”。右键选择“以管理员身份运行”。

2.检查当前执行策略：输入Get-ExecutionPolicy，如果返回的是 Restricted，就是有问题。

3.输入命令更改执行策略：Set-ExecutionPolicy RemoteSigned。

4.PowerShell 可能会提示你确认这一改变，按 Y 并回车同意。

5.验证更改：再次运行 Get-ExecutionPolicy 命令，确认现在的策略是否已经是 RemoteSigned。
```

### 启动报错

```
Error: getaddrinfo ENOTFOUND test.community.flyfox.com at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26)

配置 hosts 文件。hosts 文件位置 C:\Windows\System32\drivers\etc\hosts
```
