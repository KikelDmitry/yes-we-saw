<template>
  <tr class="table__row table__row--heading">
    <th
      v-for="field in fields"
      :key="field"
      class="cell"
      :class="[
        { 'is-sort': sortedBy == field },
        'is-' + dir.toLowerCase(),
        'cell--' + field,
      ]"
    >
      {{ field }}
      <button class="sort-by" type="button" @click="sortBy(field)">
        <span class="visually-hidden"> Sort by {{ field }} </span>
      </button>
    </th>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dir: "ASC",
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
      this.sortedBy = field;
      this.dir === "ASC" ? (this.dir = "DESC") : (this.dir = "ASC");
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
  },
  mounted() {
    this.sortBy(this.sortedBy)
  } 
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 7px 14px 7px 9px;
  position: relative;

  &:first-child {
    &::before {
      content: "#";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(calc((100% + 4px) * -1));
      text-align: center;
      background-color: $color-bg;
    }
  }
  &--title {
    @include df(768) {
      text-align: left;
      position: sticky;
      left: 0;
      z-index: 2;
      // background-color: inherit;
      background-image: linear-gradient(
        90deg,
        darken($color-bg, 1%) 0%,
        darken($color-bg, 0.2%) 80%,
        transparent 100%
      );
    }
  }
  &.is-sort {
    &::after {
      position: absolute;
      right: 3px;
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
  }
}
.sort-by {
  @include absoluteFull;
}
</style>