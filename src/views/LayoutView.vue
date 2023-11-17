<!-- 总览页面 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <ul class="app-header-nav">
          <li>
            <RouterLink to="/reqPromise">1改写</RouterLink>
          </li>
          <li>
            <RouterLink to="/pageCenter">2垂直居中</RouterLink>
          </li>
          <li>
            <RouterLink to="/adaptHeight">3模块自适应高度</RouterLink>
          </li>
          <li>
            <RouterLink to="/formview">4步骤条</RouterLink>
          </li>
          <li>
            <RouterLink to="/passwordView">5密码</RouterLink>
          </li>
        </ul>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  width: 80vw;
  height: 100vh;

  .el-header {
    width: 100vw;
    line-height: 50px;
    padding-bottom: 10px;
    border-bottom: 2px dashed pink;
    .app-header-nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      li {
        list-style-type: none;
        border-radius: 10px;
        margin: 5px;
        width: 20%;
        text-align: center;
        a {
          color: black;
          height: 100%;
          width: 100%;
          display: inline-block;
          border-radius: 10px;
          &:hover {
            background-color: red;
            transition: all 0.7s;
          }
        }
      }
    }
  }
  .el-main {
    width: 100vw;
  }
}
</style>
