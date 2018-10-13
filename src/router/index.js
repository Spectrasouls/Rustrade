import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import AuthForm from '@/components/AuthForm.vue'
import Pageuser from '@/components/Pageuser.vue'
import VueFire from 'vuefire'



window.axios=axios
Vue.use(Router);
Vue.use(VueFire);

Vue.component('AuthForm', {

});
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'authForm',
      component: AuthForm
    },
    {

      path: '/Pageuser',
      name: 'Pageuser',
      component: Pageuser
    }


  ]
})
