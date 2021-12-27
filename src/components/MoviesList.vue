<template>
  <ul v-if="listLoaded" class="movies-list">
    <li class="movies-list__item" v-for="movie in movies" :key="movie.id">
      <movie-item
        :title="movie.title"
        :date="movie.date"
        :type="movie.type"
        :rewatch="movie.rewatch"
        :alone="movie.alone"
        :note="movie.note"
      ></movie-item>
    </li>
  </ul>
  <div v-else class="loader" style="font-size: 72px;">Loading</div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";

export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.state.movieList;
    },
    ...mapGetters(["listLoaded"]),
  },
};
</script>

<style lang="scss" scoped>
.movies-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-flow: row wrap;

  &__item {
    --cols: 3;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(100% / var(--cols));
    max-width: calc(100% / var(--cols));
    padding: 5px;

    @include df(960) {
      --cols: 2;
    }
    @include df(700) {
      --cols: 1;

      flex-grow: 1;
      flex-shrink: 1;
    }
  }
}
</style>