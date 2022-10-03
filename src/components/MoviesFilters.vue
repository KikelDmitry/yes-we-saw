<template>
  <form class="filters" @input="filter">
    <label class="filters__label">
      <input type="checkbox" class="filter__checkbox" v-model="input.alone" />
      <span>Alone</span>
    </label>
    <label class="filters__label">
      <input type="checkbox" class="filter__checkbox" v-model="input.rewatch" />
      <span>Rewatch</span>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: {
        alone: false,
        rewatch: false,
      },
    };
  },
  methods: {
    filter() {
      this.$store.state.filteredMovies = this.$store.state.movieList.filter(
        (item) => {
          return item.alone == this.input.alone;
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>