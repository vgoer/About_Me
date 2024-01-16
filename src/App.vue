<style scoped></style>
<template>
    <Router-view />
</template>
<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { setTitleFromRoute } from '@/utils/common.js';

const route = useRoute();

watch(
    () => route.path,

    () => {
        setTitleFromRoute();
    },
);
</script>
