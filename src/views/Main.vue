<template>
  <div>
      <Header />
      <Pointers />
      <Testimonials />
      <LineUp />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Pointers from '../components/Pointers.vue';
import Testimonials from '../components/Testimonials.vue';
import LineUp from '../components/LineUp.vue';
</script>

<style scoped>

#sticky-header-wrap {
  height: 4.875rem;
  width: 100%;
}

#nav-items {
  color: var(--colorTextBody);
}

.page-width {
  padding: 0 2.5;
  max-width: 1300px;
  margin: 0 auto;
}

</style>