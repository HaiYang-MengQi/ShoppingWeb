import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        redirect : '/index/suggest',
        component: () => import('../view/HomeView.vue'),
        children: [
            {
                path: 'index',
                name: 'index',
                redirect : '/index/suggest',
                component: () => import('../view/IndexView.vue'),
                children: [
                    {
                        path: 'suggest',
                        name: 'suggest',
                        component: () => import('../view/404View.vue')
                    },
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
                path: '/user',
                name: 'user',
                component: () => import('../view/UserView.vue'),
                children: [
                    {
                        path: 'user_card',
                        name: 'user_card',
                        component: () => import('../view/UserCardView.vue')
                    },
                    {
                        path: 'analysis/:title?',
                        name: 'analysis',
                        component: () => import('../view/ShopAnalysisView.vue'),
                    },
                    {
                        path: 'addressList/:title?',
                        name: 'addressList',
                        component: () => import('../view/AddressListView.vue')
                    },
                    {
                        path: 'address_edit/:addressID?',
                        name: 'address_edit',
                        component: () => import('../view/AddressEditView.vue')
                    },
                ]
            },
            {
                path: '/complain/:title?'
                , name: 'complain',
                component: () => import('../view/ComplainView.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import('../view/404View.vue')
            },

        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
