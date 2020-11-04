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
Vue.use(mavonEditor)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')