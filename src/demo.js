//const Vue = window.Vue

function proxy({ data }) {

  // 将 data.n 储存在 value 中
  let value = data.n
  //这句可写可不写，接下来的定义新属性时如果发现n已经存在会自动覆盖
  delete data.n
  Object.defineProperty(data, 'n', {
    get() {
      return value
    },
    set(newValue) {
      if (newValue < 0) return
      value = newValue
    }
  })

  /* 以上即添加监听 */

  const obj = {}
  Object.defineProperty(obj, 'n', {
    get() {
      return data.n
    },
    set(value) {
      if (value < 0) return
      data.n = value
    }
  })
  return obj
}

let myData = {n: 0}
let dataProxy = proxy({data: myData})

console.log(dataProxy.n)
// 0

myData.n = -1
console.log(dataProxy.n)
// 0

myData.n = 1
console.log(dataProxy.n)
// 1


/* Object.defineProperty(data, 'n', {
  get() {
    return this._n
  },
  set(e) {
    if (e < 0) return
    this._n = e
  }
})

console.log(data.n)

// 0

data.n = -1
console.log(data.n)

// 0

data.n = 1
console.log(data.n)

// 1 */