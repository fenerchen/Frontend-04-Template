学习笔记

## 一、知识点

- 1.判断右击的方法

  > 在鼠标落下的事件中，判断 `which`的值，如果`which==3`,则认为是右击

```

 document.addEventListener('mousedown', e => {
      isMouseDown = true
      clear = (e.which === 3)
    })
```

- 2.contextmenu 事件
  该事件会在用户尝试打开上下文菜单时被触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发，通过调用事件的 preventDefault() 方法可以阻止菜单弹起。

```
 document.addEventListener('contextmenu', e => {
      e.preventDefault()
    })

```

## 二、编程技巧

- 1.使用一维数组代替二维数组

```
10*10的二维数组
let arr=Array.fill(100)
取值时,例如去arr[2][3]=arr[2*10+3]
//循环遍历：
for(let x=0;x<10;x++){
  for(let y=0;y<10;y++){
    console.log(arr[x*10+y])
  }
}

```

- 2. 一维数组的复制,一级深拷贝

```
let a=Object.create(arr)
a增删元素不会影响arr，若a的元素包涵对象{},那么操作对象元素，还是会影响到arr
```
