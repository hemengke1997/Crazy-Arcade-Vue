// 使用“import”命令加载的Vue生成版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口JS：最终目的就是创建一个VUE 实例
import Vue from 'vue'
import App from './App' //引入组件 组件的标签名叫做  App
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //把App映射为标签
  components: { App },   //在这里注册了组件 因为引入了组件 组件还没有生效 在这里
  // 渲染模板
  render: h=>h(App)
})
