import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

import 'reset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import "swiper/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs)

import 'animate.css';
import { WOW } from 'wowjs';
Vue.prototype.$wow = new WOW({
  offset: 100,
  live:false
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
