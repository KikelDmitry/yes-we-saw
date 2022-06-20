<template>
  <a :href="link" class="link" target="_blank" :title="`Search in Kinopoisk`">
    <slot>
      K
    </slot>
  </a>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  computed: {
    link() {
      return `https://www.kinopoisk.ru/index.php?kp_query=${this.title}`;
    },
  },
};
</script>

<style>
</style>