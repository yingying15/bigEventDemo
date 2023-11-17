import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//注册自定义指令
// app.directive('colors', {
//   mounted(el, binding) {
//     el.style.backgroundColor = binding.value
//   }
// })
