import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Registry from "@/views/Registry.vue";

const routes: Array<RouteRecordRaw> = [
  {path:'/', component : Home },
  {path:'/login', component : Login },
  {path:'/registry', component : Registry }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
