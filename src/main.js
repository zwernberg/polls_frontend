import Vue from 'vue'
import App from './App.vue'
import CreateQuestion from './CreateQuestion.vue'
import ListQuestion from './ListQuestion.vue'
import FindQuestion from './FindQuestion.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//bootstrap shenanigans
var tether = require('tether');
global.jQuery = require('jquery');
window.Tether = tether;
require('bootstrap');


const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), a component id string registered via Vue.component(),
// or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/create', component: CreateQuestion },
  { path: '/find', component: FindQuestion },
  { path: '/get/:id', component: ListQuestion },
  { path: '/bar', component: Bar }
]
Vue.use(VueResource);
Vue.use(VueRouter)

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

