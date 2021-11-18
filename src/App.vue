<template>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    getMovies() {
      fetch("test-list.json")
        .then((res) => res.json())
        .then((json) => {
          this.$store.state.movieList = json;
        })
        .then(this.$store.state.isLoaded = true)
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
</style>
