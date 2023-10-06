import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/home',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/home.vue"),
            },
        ]
    },
    // { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;