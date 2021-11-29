import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
      meta: {
        title: "cafe",
      },
      children: [
        {
          path: '/',
          name: "Main",
          component: () =>
            import(/* webpackChunkName: "Home" */ "./components/Main.vue"),
          meta: {
            title: "cafeMain",
          }
        },
        {
          path: '/Menu',
          name: "Menu",
          component: () =>
            import(/* webpackChunkName: "Home" */ "./views/Menu.vue"),
          meta: {
            title: "cafeMenu",
          },
        }
      ]
    },
  ],
});
