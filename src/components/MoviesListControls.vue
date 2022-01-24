<template>
  <div class="controls-row">
    <sort-controls></sort-controls>
    <movie-search></movie-search>
  </div>
</template>

<script>
import SortControls from "../components/SortControls.vue";
import MovieSearch from "../components/MovieSearch.vue";
export default {
  components: {
    SortControls,
    MovieSearch,
  },
};
</script>

<style lang="scss" scoped>
.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
</style>