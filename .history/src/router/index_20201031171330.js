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
            },
            {
                path: '/',
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/regisetr',
        name: 'regisetr',
        component: () =>
            import ('../views/login/regisetr.vue'),
        meta: {
            title: '注册'
        }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    console.log(to);
    let user = sessionStorage.getItem('user')
    if (to.path === '/login' || to.path === '/regisetr') next()
    else user ? next() : (next('/login') || next('/regisetr'))
})
export default router