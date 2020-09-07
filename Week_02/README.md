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
