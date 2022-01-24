<template>
    <movies-list-controls></movies-list-controls>
    <movies-list></movies-list>
</template>

<script>
import MoviesListControls from "../components/MoviesListControls.vue";
import MoviesList from "../components/MoviesList.vue";

export default {
  components: {
    MoviesListControls,
    MoviesList,
  },
};
</script>

<style lang="scss" scoped>
</style>
