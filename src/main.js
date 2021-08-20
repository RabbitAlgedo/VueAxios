import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueRouter from "vue-router";
import UsersList from "@/components/UsersList";
import AloneUser from "@/components/AloneUser";
import Home from "@/components/Home";

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(VueRouter)

const routes = [
  { path: '*', component: Home },
  { path: '/users', component: UsersList },
  { path: '/user/:id', component: AloneUser, name: "AloneUser", props: true }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
