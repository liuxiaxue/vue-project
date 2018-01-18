// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './router'

Vue.config.productionTip = false;//关闭生产模式下给出的提示
Vue.use(VueRouter);

const router = new VueRouter({
	mode:'hash',
	routes:routers
})

/*以下两种方式都可以，第一种是显示渲染，第二种是隐式渲染*/
// new Vue({
//   router,
//   render:(h)=>h(App)
// }).$mount('#app');


new Vue({
  el:'#app',
  router,
  render:(h)=>h(App)
})

