<!-- wx.request({
url: 'test',
data: {
test: 'test',
}
success(res) {
console.log(res)
},
fail(err) {
console.log(err)
},
})
将如下 https 请求用 Promise 形式进行改写，并封装成一个函数
 -->
<script setup>
import { ref } from 'vue'
const wx = ref('')
const res = ref('')
const flag = ref(false)

const fun = () => {
  return new Promise((resolve, reject) => {
    res.value = wx.value.request({
      url: 'test',
      data: {
        test: 'test'
      }
    })
    if (res.value.code === 200) {
      resolve('成功')
    } else {
      reject('失败')
    }
  })
}

if (flag.value === true) {
  fun().then(
    (value) => {
      console.log(value)
    },
    (err) => {
      console.log(err)
    }
  )
}
</script>
<template>
  <div class="about">
    <h1>将如下 https 请求用 Promise 形式进行改写，并封装成一个函数</h1>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
  }
}
</style>
