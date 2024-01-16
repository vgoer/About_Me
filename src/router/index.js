import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';

// 设置标题
const pageTitle = (name) => {
    return `${name} - vgoer`;
};

const routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        component: () => import('@/layouts/layout.vue'),
        meta: {
            title: pageTitle('home'),
        },
    },
    // 关于
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About/about.vue'),
        meta: {
            title: pageTitle('about'),
        },
    },

    // 404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/404.vue'),
        meta: {
            title: pageTitle('notFound'),
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 一直滚动到顶部
        return { top: 0 };
    },
});

export default router;
