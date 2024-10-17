import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../view/HomeView.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('../view/IndexView.vue'),
                redirect: '/index/suggest',
                children: [
                    {
                        path: '/index/food',
                        name: 'food',
                        component: () => import('../view/404View.vue')
                    },
                    {
                        path: '/index/suggest',
                        name: 'suggest',
                        component: () => import('../view/ProductView.vue')
                    },
                    {//todo 到时候会删除这个连接
                        path: '/index/demo',
                        name: 'demo',
                        component: () => import('../view/Demo.vue')
                    }
                ]
            },
            {
                path: '/video',
                name: 'video',
                component: () => import('../view/VideoView.vue')
            },
            {
                path: '/chat',
                name: 'chat',
                component: () => import('../view/ChatView.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../view/AboutView.vue'),
                children: [
                    {
                        path: 'address_list',
                        name: 'address_list',
                        component: () => import('../view/AddressListView.vue')
                    },
                    {
                        path: 'address_edit/:address_id?',
                        name: 'address_edit',
                        component: () => import('../view/AddressEditView.vue')
                    },
                ]
            },
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import('../view/404View.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
