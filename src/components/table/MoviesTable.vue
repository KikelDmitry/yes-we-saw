<template>
  <div class="movies-list">
    <app-filters></app-filters>
    <div class="table-wrapper">
      <table class="table">
        <!-- table heading -->
        <thead>
          <tr class="table__row table__row--head">
            <th class="table__cell table__cell--num">#</th>
            <th
              v-for="field in fields"
              :key="field"
              class="table__cell"
              :class="[
                { 'is-sort': sortedBy === field },
                'is-' + dir.toLowerCase(),
                'table__cell--' + field,
              ]"
              @click="sortBy(field)"
              :title="`Sort by ${field}`"
            >
              {{ field }}
            </th>
          </tr>
        </thead>
        <!-- table body -->
        <tbody>
          <tr
            class="table__row table__row--body"
            v-for="(movie, idx) in this.$store.state.moviesList"
            :key="idx"
          >
            <td class="table__cell table__cell--num">{{ idx + 1 }}</td>
            <td
              class="table__cell"
              v-for="(field, idx) in fields"
              :key="idx"
              :class="'table__cell--' + field"
            >
              <span>
                {{ outputProp(movie[field]) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="last-block">To be continued...</div>
  </div>
</template>

<script>
import AppFilters from "../AppFilters.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppFilters,
  },
  data() {
    return {
      dir: "DESC",
      sortedBy: "title",
    };
  },
  computed: {
    ...mapGetters({
      fields: "movieFields",
    }),
  },
  methods: {
    sortBy(field) {
      if (field === this.sortedBy) {
        this.dir === "ASC" ? (this.dir = "DESC") : (this.dir = "ASC");
      } else {
        this.sortedBy = field;
      }
      this.$store.state.moviesList = this.$store.state.moviesList.sort(
        (a, b) => {
          if (this.dir === "ASC") {
            return a[field] > b[field] ? 1 : -1;
          } else if (this.dir === "DESC") {
            return a[field] < b[field] ? 1 : -1;
          } else {
            throw new Error("Sort direction is incorrect");
          }
        }
      );
    },
    outputProp(prop) {
      if (typeof prop == "boolean") {
        return prop === true ? "x" : null;
      } else {
        return prop;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.movies-list {
  width: 100%;
}
.table-wrapper {
  overflow: auto;
}
.table {
  $border-color: rgba(200, 200, 200, 0.15);
  $border-width: 1px;

  min-width: 900px;
  width: 100%;
  border-collapse: collapse;
  &__row {
    &--head {
      // position: sticky;
      // top: 0;
      background-color: $color-bg;
      text-transform: uppercase;
    }
  }
  &__cell {
    padding: 0.3em 10px;
    text-align: center;
    border-bottom: $border-width solid $border-color;

    &:not(:last-of-type) {
      border-right: $border-width solid $border-color;
    }

    // head only
    .table__row--head & {
      padding-left: 15px;
      padding-right: 15px;

      &:not(.table__cell--num) {
        &.is-sort {
          position: relative;
          &::after {
            position: absolute;
            right: 3px;
            line-height: 1.2;
          }
          &.is-asc {
            &::after {
              content: "↓";
            }
          }
          &.is-desc {
            &::after {
              content: "↑";
            }
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    // body only
    .table__row--body & {
    }
    // &--series, &--alone, &--date, &--title, &--note, &--num
    &--title,
    &--date,
    &--note {
      text-align: left;
      white-space: nowrap;
    }
    &--date {
      width: 0;
    }
    &--title {
      max-width: 20em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &--note {
      max-width: 9em;
    }
    &--series,
    &--rewatch,
    &--alone {
      width: 80px;
    }
    &--num {
      width: 0;
    }
  }
}
.last-block {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-size: 6vmin;
  text-align: center;
  opacity: 0.6;
}
</style>