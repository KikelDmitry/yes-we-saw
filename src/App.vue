<template>
  <div class="wrapper">
    <div class="app-title">YES, WE SAW!</div>
    <the-nav></the-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";

export default {
  components: {
    TheNav,
  },
  methods: {
    getMovies() {
      fetch("test-list.json")
        .then((res) => res.json())
        .then((json) => {
          this.$store.state.movieList = json;
        })
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
}
.app-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}
</style>
