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
.table {
  --row-height: 30px;

  width: 100%;
  min-width: 768px;
  border-collapse: separate;
  border-spacing: 4px 0;
  font-size: 18px;
  overflow-x: auto;

  &__row {
    &:nth-child(odd) {
      background-color: lighten($color-bg, 4%);
    }

    &:hover {
      background-color: lighten($color-bg, 8%);
    }

    &--heading {
      text-transform: capitalize;
      position: sticky;
      top: 0;
      background-color: $color-bg;
    }
  }

  &__sort {}

  th {
    height: 36px;
    padding: 0.4em 0.3em;
    background-color: lighten($color-bg, 8%);
    border-radius: 4px;
  }

  td {
    border-bottom: 2px solid #fff;
  }
}
</style>