import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' //เรียกแบบ import หน้าhome

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView //เรียก home มาใช้
    },
    {
        path: '',
        name: 'toolbar',
        component: () =>import ('../views/toolbar.vue'),
        children: [{
            path: '/me',
            name: 'me',
            component: () =>import ('../views/Me.vue')
        }, {
            path: '/apicon',
            name: 'apicon',
            component: () =>import ('../views/Apicon.vue')
        }, {
            path: '/simple',
            name: 'simple',
            component: () =>import ('../views/Simple.vue')
        }, {
            path: '/score',
            name: 'score',
            component: () =>import ('../views/Score.vue')
        }, ]
    },
    {
        path: '/about',
        name: 'about',
        component: () =>import ('../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router