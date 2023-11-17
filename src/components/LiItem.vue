<script setup>
import { ref } from 'vue'

//选中之后的 a背景色，a的字体颜色，a的第一个儿子
const colorArr = ref(['#65CDAA', '#fff', '#fff'])
//默认的颜色
const colorDefArr = ref(['#f0f2f6', '#0c0c0c', '#e8eaef'])
//封装局部指令
const vColor = (el, binding) => {
  el.style.backgroundColor = binding.value[0]
  el.style.color = binding.value[1]
  el.childNodes[0].style.backgroundColor = binding.value[2]
}

//得到父组件的值
const props = defineProps({
  steps: {
    type: Array,
    default: () => {
      return []
    }
  },
  flag: {
    type: Number
  }
})
console.log(props.flag)
</script>
<template>
  <li v-for="item in steps" :key="item?.id">
    <a v-color="item.id === flag ? colorArr : colorDefArr">
      <div class="inner">
        <span :class="{ active: item?.id === flag }">{{ item?.id }}</span>
      </div>
      {{ item?.name }}</a
    >
  </li>
</template>
<style scoped lang="scss">
li {
  margin: 0;
  list-style-type: none;
  width: 33.33%;
  text-align: center;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      text-align: center;
      line-height: 19px;
      margin-right: 4px;
      span {
        color: black;
      }
      .active {
        color: #65cdaa;
      }
    }
  }
}
</style>
