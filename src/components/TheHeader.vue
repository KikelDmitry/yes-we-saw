<template>
  <header class="header">
    <h1 class="header__title">{{ projectName }}</h1>
    <the-nav></the-nav>
  </header>
</template>

<script>
import TheNav from "./TheNav.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheNav,
  },
  computed: {
    ...mapGetters(["projectName"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__title {
    margin: 0.5em 0;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
}
</style>