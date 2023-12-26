<template>
  <main class="content" :class="addClass">
    <slot></slot>
  </main>
</template>

<script>
// import AppPreloader from "../components/AppPreloader.vue"

export default {
  components: {},
  props: ["addClass"],
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  padding: 20px 0;
}
</style>