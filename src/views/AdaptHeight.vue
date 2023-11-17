<!-- 在一个容器中有三个模块，定义某一模块高度，使得其它模块能自适应最 高高度 -->
<script setup></script>

<template>
  <div class="box">
    <div class="box1">box1</div>
    <div class="box2">box2</div>
    <div class="box3">box3</div>
  </div>
</template>
<style scoped lang="scss">
.box {
  margin: 0 auto;
  display: grid;
  height: 300px;
  width: 800px;
  border: 1px solid pink;
  grid-template-columns: auto auto auto;
  grid-auto-rows: max-content;
  .box1 {
    background-color: red;
    width: 200px;
    height: 150px;
  }
  .box2 {
    background-color: green;
    width: 200px;
  }
  .box3 {
    background-color: aquamarine;
    width: 200px;
  }
}
</style>
