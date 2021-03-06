// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from "./store"


import 'whatwg-fetch'
// 引入全局css
import './common/public.css';
import Method from './common/Public'
// 引入全局的rem+
import './common/rem.js';
//引入全局的标题组件vue-wechat
// Vue.use(require('vue-wechat-title'))
// 将公共的js挂载到vue的原型上面
Vue.use(new Method());

Vue.use(AlertPlugin)
    // FastClick.attach(document.body)
import { AlertPlugin, ToastPlugin, WechatPlugin, LoadingPlugin } from 'vux'
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(WechatPlugin);

// import { videoPlayer } from 'vue-video-player'

// Vue.component(videoPlayer);


Vue.config.productionTip = false
    // 安装swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)



//引入全局的标题组件vue-wechat
Vue.use(require('vue-wechat-title'))
    /* eslint-disable no-new */
new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app-box')