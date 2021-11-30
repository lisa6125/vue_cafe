import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


  const routes= [
    {
      path: "/",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
      meta: {
        title: "cafe",
      },
    },
    {
      path: '/Menu',
      name: "Menu",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Menu.vue"),
      meta: {
        title: "cafeMenu",
      },
    },
    {
      path: '/Tradition',
      name: "Tradition",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Tradition.vue"),
      meta: {
        title: "cafeTradition",
      },
    }
  ]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
router.afterEach((to, from) => {
  let title = ''
  title = to.meta.title
  document.title = title
})
export default router