import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import ProductView from '../components/ProductView.vue'
import ProductViewB from '../components/ProductViewB.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Store from '../views/Store.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Journal from '../views/Journal.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    // {
    //     path: '/',
    //     redirect: '/dashboard',
    //     component: DefaultLayout,
    //     meta: {
    //         requiresAuth: true
    //     },
    //     children: [
    //         {
    //             path: '/dashboard',
    //             name: 'Dashboard',
    //             component: Dashboard
    //         },
    //         // {
    //         //     path: '/surveys',
    //         //     name: 'Surveys',
    //         //     component: Surveys
    //         // }
    //     ]
    // },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: {
            isGuest: true
        },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },

    {
        path: '/shop',
        name: 'Store',
        component: Store,
    },
    {
        path: '/blogs',
        name: 'Journal',
        component: Journal,
    },
    {
        path: '/products/',
        name: 'ProductView',
        props: true,
        component: ProductView,
    },
    {
        path: '/collections',
        name: 'ProductViewB',
        component: ProductViewB,
        meta: {
            isGuest: true
        },
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
        meta: {
            isGuest: true
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;