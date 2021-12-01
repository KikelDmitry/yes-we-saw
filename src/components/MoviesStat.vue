<template>
  <div class="stat">
    <div class="stat__item">Всего фильмов: {{ summary }}</div>
    <div class="stat__item">Пересмотренных: {{ rewatches }}</div>
    <div class="stat__item">Сериалов: {{ series }}</div>
    <div class="stat__item">В одиночку: {{ alone }}</div>
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
.stat {
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: inherit;
}
</style>