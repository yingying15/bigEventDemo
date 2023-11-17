<!-- 
    
1. 限制仅可输入数字
2. 可自定义密码的长度， 默认6位
3. 在输入完当前位置的密码后， 自动聚焦到下一个输入框
4. 在删除当前位置的密码后， 自动聚焦到上一个输入框
5. 在组件上可通过  `v-model` 获取到输入的密码内容
  key  1 ， Backspace  
-->
<script setup>
import { ref } from 'vue'
import PassItem from '@/components/PassItem.vue'
const pass = ref('')
//得到输入框的值
const search = (e) => {
  pass.value = e.data
}
//定义定时器，防抖
let timeId
const ipuDown = (el) => {
  if (timeId) clearTimeout(timeId)
  timeId = setTimeout(() => {
    //输入的是删除键
    if (el.key === 'Backspace') {
      //如果上一个兄弟节点 存在的话 获取焦点
      if (el.target.previousElementSibling)
        el.target.previousElementSibling.focus()
    } else {
      if (!/^\d$/.test(el.key)) {
        ElMessage.warning('请输入数字')
        return
      }
      //输入的是数字键
      if (/^\d$/.test(el.key)) {
        //失去焦点
        el.target.blur()
        //获取焦点
        if (el.target.nextElementSibling) el.target.nextElementSibling.focus()
      }
    }
  }, 500)
}
</script>

<template>
  <div class="box">
    <PassItem
      v-for="item in 6"
      :key="item"
      v-model:modelValue="pass"
      @input="search($event)"
      @keyup="ipuDown"
    ></PassItem>
  </div>
</template>
<style scoped lang="scss">
.box {
  width: 500px;
  height: 70px;
  margin: 20px auto;
  input {
    width: 16%;
    height: 100%;
    border: 1px solid pink;
  }
}
</style>
