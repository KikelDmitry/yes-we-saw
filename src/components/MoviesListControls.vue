<template>
  <div class="controls-row">
    <sort-controls></sort-controls>
    <movie-search></movie-search>
    <movies-filters></movies-filters>
  </div>
</template>

<script>
import SortControls from "../components/SortControls.vue";
import MovieSearch from "../components/MovieSearch.vue";
import MoviesFilters from "../components/MoviesFilters.vue";

export default {
  components: {
    SortControls,
    MovieSearch,
    MoviesFilters,
  },
};
</script>

<style lang="scss" scoped>
.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 20px;
}
</style>