<template>
  <movies-stat v-if="$store.state.isLoaded"></movies-stat>
  <div v-else>Loading</div>
  <movies-list></movies-list>
</template>

<script>
import moviesStat from "../components/moviesStat.vue";
import moviesList from "../components/moviesList.vue";

export default {
  components: {
    moviesStat,
    moviesList,
  },
};
</script>
