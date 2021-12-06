<template>
  <sort-controls></sort-controls>
  <movies-list v-if="$store.state.isLoaded"></movies-list>
</template>

<script>
import SortControls from "../components/SortControls.vue";
import MoviesList from "../components/MoviesList.vue";

export default {
  components: {
    SortControls,
    MoviesList,
  },
  
};
</script>
