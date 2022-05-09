<template>
  <div class="movies-list">
    <app-filters></app-filters>
    <table class="table">
      <table-head></table-head>
      <table-row v-for="movie in this.$store.state.moviesList" :key="movie.id" class="table__row" :movie="movie">
      </table-row>
    </table>
  </div>
</template>

<script>
import AppFilters from "../AppFilters.vue";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";

export default {
  components: {
    AppFilters,
    TableHead,
    TableRow,
  },

};
</script>

<style lang="scss" scoped>
.movies-list {
  width: 100%;
  overflow-x: auto;
}
.table {
  width: 100%;
  min-width: 768px;
  border-collapse: separate;
  border-spacing: 4px 0;
  font-size: 18px;

  &__row {
    &:nth-child(odd) {
      background-color: lighten($color-bg, 4%);
    }
    &:not(&--heading) {
      &:hover {
        background-color: lighten($color-bg, 8%);
      }
    }
    &--heading {
      text-transform: capitalize;
      position: sticky;
      top: 0;
      background-color: $color-bg;
    }
  }
}
</style>