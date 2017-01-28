// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fireboom from './components/fireboom'
import textwish from './components/textWish'
import voicewish from './components/voiceWish'
import voiceshare from './components/voiceShare'
import VueRouter from 'vue-router'
// import $ from 'jqurey'
/* eslint-disable no-new */
Vue.use(VueRouter)

const route = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: fireboom },
    { path: '/textWish', component: textwish },
    { path: '/voiceWish', component: voicewish },
    { path: '/voiceShare/:id', component: voiceshare }
  ]
})

new Vue({
  el: '#app',
  router: route
})

