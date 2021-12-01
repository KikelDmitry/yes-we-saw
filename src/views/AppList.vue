<template>
  <movies-stat></movies-stat>
  <sort-controls></sort-controls>
  <movies-list></movies-list>
</template>

<script>
import MoviesStat from "../components/moviesStat.vue";
import SortControls from "../components/SortControls.vue";
import MoviesList from "../components/moviesList.vue";

export default {
  components: {
    MoviesStat,
    SortControls,
    MoviesList,
  },
};
</script>
