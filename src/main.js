// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import resource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Vue.prototype.$http = axios;
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
// Vue.use(resource)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // el: '#app',
  // router,
  // template: '<App/>',
  // components: { App }
})
