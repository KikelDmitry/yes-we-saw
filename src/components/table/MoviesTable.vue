<template>
  <div class="movies-list">
    <app-filters></app-filters>
    <table class="table">
      <table-head></table-head>
      <table-row
        v-for="(movie, idx) in this.$store.state.moviesList"
        :key="idx"
        class="table__row"
        :movie="movie"
        :num="idx + 1"
      >
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
  // overflow-x: auto;
}
.table {
  width: 100%;
  min-width: 768px;
  padding-left: 50px;
  border-collapse: separate;
  border-spacing: 4px;
  font-size: 18px;

  &__row {
    transition: all 100ms 100ms;

    &--heading {
      text-transform: capitalize;
      position: sticky;
      top: 0;
      z-index: 10;
      font-size: 20px;
      background-color: $color-bg;
      background-image: linear-gradient(
        90deg,
        darken($color-bg, 1%) calc(0% - 32px),
        lighten($color-bg, 18%) calc(50% - 16px),
        darken($color-bg, 1%) 100%
      );
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }
    &:not(&--heading) {
      background-image: linear-gradient(
        90deg,
        lighten($color-bg, 10%),
        transparent,
        lighten($color-bg, 10%)
      );

      &:nth-child(odd) {
        background-color: lighten($color-bg, 4%);
      }
      &:nth-child(even) {
        background-color: lighten($color-bg, 1%);
      }
      &:hover {
        background-color: lighten($color-bg, 8%);
      }
    }
  }
}
</style>