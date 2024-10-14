---
title: 魔兽世界插件
date: 2024-10-14
categories:
  - 游戏攻略
tags:
  - 魔兽世界
sticky: 7
---

## 冰法

### 天赋

### 属性

智力>急速>暴击(33.3%前)>精通>全能

### 手法

#### 单体

寒冰箭 → 冰风暴 → 冰霜血脉 → 彗星风暴 → 寒冰宝珠 → 冰枪 → 冰枪 → 打地鼠

#### AOE

寒冰宝珠 → 暴风雪 → 彗星风暴 → 冰锥术 → 寒冰宝珠 → 彗星风暴 → 打地鼠

### WA

[寒冰指](https://ngabbs.com/read.php?tid=41447862&fav=:FF520C8DB)
[冰霜裂片](https://bbs.nga.cn/read.php?tid=41781174)

## 宏

```
// 指向宏
#showtooltips 技能名
/cast [@cursor] 技能名

// 爆发宏
#showtooltips
/castsequence [@cursor] reset=5 寒冰箭,冰风暴,冰霜血脉,彗星风暴,寒冰宝珠,冰枪术,冰枪术
#showtooltips
/castsequence [@cursor] reset=5 寒冰宝珠,暴风雪,彗星风暴,冰锥术,寒冰宝珠,彗星风暴
```
