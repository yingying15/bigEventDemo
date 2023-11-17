<!-- 表单组件 -->
<script setup></script>

<template>
  <div class="box">
    <div class="top">
      <slot name="boxTop"></slot>
    </div>
    <div class="cen">
      <slot name="boxCen"></slot>
    </div>
    <div class="botto">
      <slot name="boxBotto"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  margin: 0 auto;
  width: 600px;
}
.top {
  height: 50px;
  width: 100%;
}
.cen {
  height: 70px;
  width: 100%;
}
.botto {
  height: 50px;
  width: 100%;
}
</style>
