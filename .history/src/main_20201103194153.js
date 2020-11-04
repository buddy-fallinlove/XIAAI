import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JsonExcel from 'vue-json-excel';
import mavonEditor from 'mavon-editor'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.component('downloadExcel', JsonExcel);
var Vue = require('vue')
var mavonEditor = require('mavon-editor')
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')