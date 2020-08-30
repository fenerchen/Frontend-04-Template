# 学习笔记

## 一、两种 case 交替出现的技巧

### 分析

> 使用数字代表 case，那么问题就转化成如何让两个数字交替出现。
>
> 假设`2=>case1`, `3=>case2`,设置一个变量 current 作为当前的取值。寻找一个常量 COUNT，这个常量每次对 current 操作后，会得到另外一个 case 的值，然后更新 current。那么 COUNT 的获取以及问题的解决方案如下。

### 方案

- 1.使用乘除法

> `COUNT = 2*3`，设置初始值`current = 2`。那么有：
> `current = COUNT/current`,使得 2 和 3 交替出现。

- 1.使用加减法

> `COUNT=2+3`，设置初始值`current=2`。那么有：
> `current = COUNT-current`,使得 2 和 3 交替出现。

- 3. 取反操作

## 二、JS 知识点

### 1、退出两层循环

```
outer:for(){
  for(){
    break outer
  }
}
```

### 2、深拷贝

> 1、能用一维数组表示，不用二维数组。

> 2、二维数组拷贝 `JSON.parse(JSON.stringify(cellsList))`

> 3、一维数组，减小开销的拷贝 `Object.create(cellsList)`
