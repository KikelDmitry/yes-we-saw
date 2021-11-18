<template>
  <movies-list></movies-list>
  <movies-stat v-if="$store.state.isLoaded"></movies-stat>
  <div v-else>Loading</div>
</template>

<script>
import moviesList from "../components/moviesList.vue";
import moviesStat from "../components/moviesStat.vue";

export default {
  components: {
    moviesList,
    moviesStat,
  },
};
</script>
