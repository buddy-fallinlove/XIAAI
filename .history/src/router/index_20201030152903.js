import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'
Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'layout',
        component: layout,
        children: [

            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/quit',
                name: 'quit',
                component: () =>
                    import ('../views/quit/quit.vue'),
                meta: {
                    title: '退出'
                }
            }

        ]
    },
    {
        path: '/login'
        name: 'login',
        component: () =>
            import ('../views/login/login.vue'),
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router