<template>
  <sort-controls></sort-controls>
  <movies-list v-if="isLoaded"></movies-list>
  <div v-else>Loading...</div>
</template>

<script>
import SortControls from "../components/SortControls.vue";
import MoviesList from "../components/MoviesList.vue";

export default {
  components: {
    SortControls,
    MoviesList,
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    getMovies() {
      fetch("test-list.json")
        .then((res) => res.json())
        .then((json) => {
          this.$store.state.movieList = json;
          this.isLoaded = true;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>
