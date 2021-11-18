<template>
  <div>
    <div>Всего фильмов: {{ summary }}</div>
    <div>Пересмотренных: {{ rewatchesAmount }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    summary() {
      return this.$store.state.movieList.length;
    },
    rewatchesAmount() {
      return this.$store.state.movieList.filter((movie) => {
        return movie.rewatch === true;
      }).length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>