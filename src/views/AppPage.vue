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
  flex: 1;
  position: relative;
  padding: 20px 0;
}
</style>