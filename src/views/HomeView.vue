<!-- 请举出三种垂直居中的方法，并用代码实现 -->
<script setup></script>

<template>
  <div class="box">
    <div class="box-one inner">
      <div class="one-inner inn-box"></div>
    </div>
    <div class="box-two inner">
      <div class="two-inner inn-box"></div>
    </div>
    <div class="box-three inner">
      <div class="three-inner inn-box"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.inn-box {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.inner {
  width: 400px;
  height: 400px;
  border: 1px solid green;
}
//定位+外边距
.box-one {
  position: relative;
  .one-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
  }
}
//定位+位移
.box-two {
  position: relative;
  .two-inner {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
//伸缩盒
.box-three {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
