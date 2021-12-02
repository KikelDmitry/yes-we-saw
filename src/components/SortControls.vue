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
  data() {
    return {
      sortDir: "ASC",
    };
  },
  methods: {
    sortBy(by) {
      if (by === "date" || by === "type" || by === "title") {
        this.$store.state.movieList.sort((a, b) => {
          if (by == "date") {
            Number(a[by]);
            Number(b[by]);
          }
          return a[by] > b[by] ? 1 : -1;
        });
        this.sortDir == "ASC"
          ? (this.sortrDir = "DESC")
          : this.sortDir = "ASC";
      } else {
        console.error(`"${by}" is wrong param for sort`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
}
</style>