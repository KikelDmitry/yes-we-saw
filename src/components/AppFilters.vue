<template>
  <div class="filters">
      <form class="filters__form">

        <button
          type="button"
          v-for="filter in filters"
          :key="filter"
          @click="filterBy(filter)"
        >
          {{ filter }}
        </button>
      </form>
      <div class="filters__amount">
        {{ length }}
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      filters: ["rewatch", "series", "alone"],
    }
  },
  computed: {
    ...mapGetters({
      length: "moviesTotal",
    }),
  },
  methods: {
    filterBy(field) {
      this.$store.state.moviesList = this.$store.state.moviesList.filter(
        (item) => {
          return !item[field];
        }
      );
    },
  }
}
</script>

<style lang="scss" scoped>

</style>