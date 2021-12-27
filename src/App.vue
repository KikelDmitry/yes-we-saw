<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view></router-view>
    <theme-switcher></theme-switcher>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  components: {
    TheHeader,
    ThemeSwitcher,
  },
  data() {
    return {};
  },
  methods: {
    getMovies() {
      fetch("test-list.json")
        .then((res) => res.json())
        .then((json) => {
          this.$store.state.movieList = json;
        })
        .then((this.$store.state.listLoaded = true))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss">
html {
  font-family: sans-serif;
}
body {
  min-height: 200vh;
  background-color: $color-bg;
  color: $color-fg;
}
#app {
  min-height: inherit;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
