<template>
  <tr class="table__row table__row--heading">
    <th v-for="field in fields" :key="field" class="cell">
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
  computed: {
    ...mapGetters({
      fields: "movieFields",
    }),
  },
  methods: {
    sortBy(field) {
      console.log(field);
      this.$store.state.moviesList = this.$store.state.moviesList.sort((a,b)=> {
        return a[field] < b[field] ? 1 : -1
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 7px 10px;

  &:first-child {
    position: relative;

    &::before {
      content: '#';
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
}
.sort-by {
  @include absoluteFull;
}
</style>