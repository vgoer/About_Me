<style scoped></style>
<!-- layout -->
<template>
    <div class=" container">
        <Header></Header>

        <div>
            <RouterView></RouterView>
        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';


</script>
