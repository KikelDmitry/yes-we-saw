<template>
  <ul class="movies-list">
    <li class="movies-list__item" v-for="item in list" :key="item.id">
      <movie-item
        :title="item.title"
        :date="item.date"
        :type="item.type"
        :rewatch="item.rewatch"
        :alone="item.alone"
        :note="item.note"
      ></movie-item>
    </li>
  </ul>
</template>

<script>
import movieItem from "./movieItem.vue";

export default {
  components: {
    movieItem,
  },
  computed: {
    list() {
      return this.$store.state.movieList;
    },
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
    flex: 0 0 33.33%;
    padding: 5px;

    @include df(960) {
      flex-basis: 50%;
    }
    @include df(560) {
      flex: 1 1 100%;
    }
  }
}
</style>