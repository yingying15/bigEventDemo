<!--  
    请参考下图样式，使用Vue 编写一个步骤条表单组件，并尽可能实现如下 
    1. 可以自定义表单高亮颜色
2. 使用时可以自定义所有步骤的名称
3. 使用时可以自定义每一步骤对应的表单内容
4. 可以重置当前表单内容
5. 点击提交按钮后展示表单填写结果
-->
<script setup>
import FormItem from '@/components/FormItem.vue'
import LiItem from '@/components/LiItem.vue'
import { ref } from 'vue'

//定义切换步骤标识
const flag = ref(1)
//定义表单数据
const formValue = ref({
  name: '',
  iphone: '',
  password: ''
})
//切换步骤/^1[3456789]\d{9}$/.test(formValue.value.iphone)
const changePage = (val) => {
  if (val === 2 && formValue.value.name === '') {
    ElMessage.warning('请填写用户名')
    return
  } else if (val === 3 && formValue.value.iphone === '') {
    ElMessage.warning('请填写手机号')
    return
  } else if (val === 3 && !/^1[3456789]\d{9}$/.test(formValue.value.iphone)) {
    ElMessage.warning('请填写正确的手机号')
    return
  }
  flag.value = val
}

//重置表单
const resetForm = () => {
  if (flag.value === 1) {
    formValue.value.name = ''
  } else if (flag.value === 2) {
    formValue.value.iphone = ''
  } else if (flag.value === 3) {
    formValue.value.password = ''
  }
}

//定义步骤数组内容
const steps = ref([
  { id: 1, name: '请填写用户名' },
  { id: 2, name: '请填写手机号' },
  { id: 3, name: '请填写手机号' }
])
//默认不显示表单
const formFlag = ref(false)
//提交表单
const submit = () => {
  formValue.value.password === '' || !/^\w{6}$/.test(formValue.value.password)
    ? ElMessage.warning('密码未填写或者格式错误')
    : (formFlag.value = true)
}
</script>

<template>
  <div class="box">
    <!-- 第一步 -->
    <FormItem v-show="flag === 1">
      <template #boxTop>
        <ul>
          <LiItem :steps="steps" :flag="flag"></LiItem>
        </ul>
      </template>
      <template #boxCen>
        <div class="cen">
          <span>用户名：</span
          ><input
            type="text"
            v-model="formValue.name"
            name="用户名"
            id="name"
            placeholder="请输入用户名"
          />
        </div>
      </template>
      <template #boxBotto>
        <div class="botto btn">
          <button @click="resetForm">重置</button>
          <button @click="changePage(2)">下一步</button>
        </div>
      </template>
    </FormItem>
    <!-- 第二步 -->
    <FormItem v-show="flag === 2">
      <template #boxTop>
        <ul>
          <LiItem :steps="steps" :flag="flag"></LiItem>
        </ul>
      </template>
      <template #boxCen>
        <div class="cen">
          <span>手机号:</span
          ><input
            type="text"
            v-model="formValue.iphone"
            name="手机号"
            id="name"
            placeholder="请输入手机号"
          />
        </div>
      </template>
      <template #boxBotto>
        <div class="botto btn">
          <button @click="resetForm">重置</button>
          <button @click="changePage(1)">上一步</button>
          <button @click="changePage(3)">下一步</button>
        </div>
      </template>
    </FormItem>
    <!-- 第三步 -->
    <FormItem v-show="flag === 3">
      <template #boxTop>
        <ul>
          <LiItem :steps="steps" :flag="flag"></LiItem>
        </ul>
      </template>
      <template #boxCen>
        <div class="cen">
          <span>密码:</span
          ><input
            type="text"
            v-model="formValue.password"
            name="密码"
            id="name"
            placeholder="请输入密码"
          />
        </div>
      </template>
      <template #boxBotto>
        <div class="botto btn">
          <button @click="resetForm">重置</button>
          <button @click="changePage(2)">上一步</button>
          <button @click="submit">提交</button>
        </div>
      </template>
    </FormItem>

    <!-- 显示表单 -->
    <div class="formPage" v-show="formFlag">
      <p>
        用户名：<input type="text" v-model="formValue.name" disabled="true" />
      </p>
      <p>
        手机号：<input type="text" v-model="formValue.iphone" disabled="true" />
      </p>
      <p>
        密&nbsp;&nbsp;&nbsp;&nbsp;码：<input
          type="text"
          v-model="formValue.password"
          disabled="true"
        />
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .cen {
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span,
    input {
      font-size: 1.2rem;
    }
    input {
      width: 80%;
    }
  }
  .botto {
    text-align: right;
    line-height: 50px;
    button {
      border-color: gray;
      border-radius: 4px;
      background-color: transparent;
      color: black;
      margin-right: 10px;
      font-size: 1.1rem;
      padding: 5px;
    }
  }

  .btn {
    /* 第二个按钮有边框 */
    button:nth-child(2) {
      border-color: #65cdaa;
      color: #65cdaa;
    }
    /* 最后一个按钮有背景色 */
    button:last-child {
      background-color: #65cdaa;
      color: #fff;
    }
  }

  //表单样式
  .formPage {
    border: 2px solid #65cdaa;
    width: 600px;
    margin: 20px auto;
    font-size: 1.3rem;
    padding: 20px;
    p {
      margin-top: 10px;
      input {
        font-size: 1.3rem;
        width: 80%;
      }
    }
  }
}
</style>
