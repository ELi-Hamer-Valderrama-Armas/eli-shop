import Vue from "vue";
import VueRouter from "vue-router";
import SideMainLayout from "@/layout/SideMainLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: SideMainLayout,
    children:[
      {
        path:"/",
        name:"Inicio",
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/Index.vue"),

      },
      {
        path: "/relojes",
        name: "Relojes",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Relog.vue"),
      },
      {
    path: "/celulares",
    name: "Celulares",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Celular.vue"),
  },
    ]
  },
  
  
  
  {
    path: "/carrito",
    name: "Carrito",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Cart.vue"),
  },
  {
    path: "/producto/:id",
    name: "Producto",
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Detail.vue"),
  },

 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
