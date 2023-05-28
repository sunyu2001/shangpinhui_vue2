import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 注册路由：底下写法，kv一致，省略v
  // 注册路由信息：当书写router时，组件身上都拥有$route,$router属性
  
  router
}).$mount('#app')
