<template>
  <main class="content" :class="addClass">
    <slot></slot>
    <app-preloader></app-preloader>
  </main>
</template>

<script>
import AppPreloader from "../components/AppPreloader.vue"

export default {
  components: {
    AppPreloader,
  },
  props: ["addClass"],
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;  
  padding: 20px 0;
}
</style>