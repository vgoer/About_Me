import router from '../router';
import { nextTick } from 'vue';
import { useTitle } from '@vueuse/core';


/**
 * 根据路由 meta.title 设置浏览器标题
 */
export function setTitleFromRoute() {
    if (typeof router.currentRoute.value.meta.title != 'string') {
        return;
    }

    nextTick(() => {
        let webTitle = '';

        webTitle = router.currentRoute.value.meta.title;

        const title = useTitle();
        title.value = ` ${webTitle}`;
    });
}
