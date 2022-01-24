<template>
  <div class="sort">
    <div class="sort__title">Sort by:</div>
    <button @click="sortBy('title')" class="sort__btn">Name</button>
    <button @click="sortBy('date')" class="sort__btn">Date</button>
    <button @click="sortBy('id')" class="sort__btn">Id</button>
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
      if (by === "date" || by === "title") {
        this.$store.state.movieList.sort((a, b) => {
          a - b
        });
        // this.sortDir == "ASC"
        //   ? (this.sortDir = "DESC")
        //   : (this.sortDir = "ASC");
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