<template>
  <div class="wrapper">
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
        .then((this.$store.state.isLoaded = true))
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
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
