<template>
  <header class="header">
    <h1 class="header__title">{{ config.project.title }}</h1>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      config: "config",
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    text-transform: uppercase;
    text-shadow: 0.05em 0.05em 0.1em #000;
    font-size: 2.5em;
    line-height: 1;
    padding: 0.8em 0;

    @include mf(360) {
      font-size: calc(2em + 2vw);
    }
    @include mf(1600) {
      font-size: 4em;
    }
  }
}
</style>