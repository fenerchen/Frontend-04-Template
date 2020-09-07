const timer = (t) => {
  console.log('绿灯')
  setTimeout(() => {
    console.log('黄灯')
    setTimeout(() => {
      console.log('红灯')
      setTimeout(() => {
        timer()
      }, 5000)
    }, 2000)

  }, 10000)
}
// timer()
const sleep = (t) => {
  return new Promise((res, rej) => {
    setTimeout(res, t)
  })

}

const go = () => {
  console.log('路灯')
  sleep(1000).then(() => {
    console.log('黄灯')
    return sleep(1000)
  }).then(() => {
    console.log('红灯')
    return sleep(1000)
  }).then(
    go
  )
}
const go1 = async () => {
  try {
    while (true) {
      console.log('绿灯')
      await sleep(1000)
      console.log('黄灯')
      await sleep(1000)
      console.log('红灯')
      await sleep(1000)
    }
  } catch (err) {
    console.log(err)
  }
}

go1()
