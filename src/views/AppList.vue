<template>
  <movies-stat></movies-stat>
  <sort-controls></sort-controls>
  <movies-list></movies-list>
</template>

<script>
import MoviesStat from "../components/MoviesStat.vue";
import SortControls from "../components/SortControls.vue";
import MoviesList from "../components/MoviesList.vue";

export default {
  components: {
    MoviesStat,
    SortControls,
    MoviesList,
  },
};
</script>
