<template>
  <div class="sort">
    <div class="sort__title">Sort by:</div>
    <button @click="sortBy('title')" class="sort__btn">Name</button>
    <button @click="sortBy('date')" class="sort__btn">Date</button>
    <button @click="sortBy('type')" class="sort__btn">Type</button>
  </div>
</template>

<script>
export default {
  methods: {
    sortBy(by) {
      return this.$store.state.movieList.sort((a, b) => {
        return a[by] > b[by] ? 1 : -1;
      });
    },
    byName() {
      return this.$store.state.movieList.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
}
</style>