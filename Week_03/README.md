# 学习笔记

## 一、知识点
- 1. var与iife

> var 声明作用域函数执行的作用域。也就是说，var 会穿透 for 、if 等语句。

>在只有 var，没有 let 的旧 JavaScript 时代，诞生了一个技巧，叫做：立即执行的函数表达式（IIFE），通过创建一个函数，并且立即执行，来构造一个新的域，从而控制 var 的范围。

>让函数变成函数表达式的做法是加括号。
**当函数变成立即执行的函数表达式时，表达式中的变量不能从外部访问。
IIFE，避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域**

```js
//避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域
(function(){
    var a;
    //code
}());


(function(){
    var a;
    //code
})();
```

**IIFE缺点：**

>如果上一行代码不写分号，括号会被解释为上一行代码最末的函数调用，产生完全不符合预期，并且难以调试的行为，加号等运算符也有类似的问题。所以一些推荐不加分号的代码风格规范，会要求在括号前面加上分号

```js

;(function(){
    var a;
    //code
}())


;(function(){
    var a;
    //code
})()
```
**iife推荐写法**
>使用viod。

>优点：
1.有效避免了语法问题
2.语义也更为合理。语义上 void 运算表示忽略后面表达式的值，变成 undefined，我们确实不关心 IIFE 的返回值，所以语义也更为合理

```js

void function(){
    var a;
    //code
}();
```

- with
>with 内部的变量也会变量提升
```js


var b;
void function(){
    var env = {b:1};
    b = 2;
    console.log("In function b:", b);//2
    with(env) {
      //b的声明提升到了function中
        var b = 3;
        console.log("In with b:", b);//3
    }
}();
console.log("Global b:", b);//undefined
```

- let

>{}会产生let作用域

例如：
`for；if；switch；try/catch/finally`。