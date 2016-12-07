import Vue from 'vue'
import App from './App.vue'
import HomePage from './HomePage.vue'
import CreateQuestion from './CreateQuestion.vue'
import ListQuestion from './ListQuestion.vue'
import FindQuestion from './FindQuestion.vue'
import VoteResult from './VoteResult.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//bootstrap shenanigans
var tether = require('tether');
global.jQuery = require('jquery');
window.Tether = tether;
require('bootstrap');



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), a component id string registered via Vue.component(),
// or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HomePage, name:'home' },
  { path: '/create', component: CreateQuestion, name:'create' },
  { path: '/find', component: FindQuestion, name:'find' },
  { path: '/get/:slug', component: ListQuestion, name:'getQuestion' },
  { path: '/get/:slug/result', component: VoteResult, name:'getResult' },
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

