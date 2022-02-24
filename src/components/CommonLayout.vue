<template>
    <Header />
    <div class="lg:px-28 md:px-8 px-8 mb-9" v-if="{ name: 'Login' }">
        <slot>
        </slot>
    </div>
</template>

<script setup>
import Header from './Header.vue';
</script>

<style>

</style>