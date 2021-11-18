<template>
  <div>
    <div>Всего фильмов: {{ summary }}</div>
    <div>Пересмотренных: {{ rewatches }}</div>
    <div>Сериалов: {{ series }}</div>
    <div>В одиночку: {{ alone }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: this.$store.state.movieList,
    };
  },
  computed: {
    summary() {
      return this.$store.state.movieList.length;
    },
    rewatches() {
      return this.$store.state.movieList.filter((movie) => {
        return movie.rewatch === true;
      }).length;
    },
    series() {
      return this.$store.state.movieList.filter((movie) => {
        return movie.type === "series";
      }).length;
    },
    alone() {
      return this.$store.state.movieList.filter((movie) => {
        return movie.alone === true;
      }).length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>