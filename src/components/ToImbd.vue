<template>
  <a :href="link" class="imdb-link" target="_blank" :title="`Search in Kinopoisk`">
    <slot> K </slot>
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

<style scoped lang="scss">
.imdb-link {
  display: block;
  width: 100%;
  height: 100%;
  @include dottedEnd;
}
</style>