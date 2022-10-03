<template>
  <form class="search">
    <label class="search__label" for="search-input">
      <img src="@/assets/img/icons/search.svg" alt="search icon">
    </label>
    <input
      @input="search"
      v-model="input"
      id="search-input"
      class="search__input"
      type="text"
      inputmode="search"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      this.$store.state.filteredMovies = this.$store.state.movieList.filter(
        (item) => {
          return item.title
            .toLowerCase()
            .includes(this.input.trim().toLowerCase());
        }
      );
      if (this.input === "") {
        this.$store.state.searchList = null;
      }
      // let searchList = this.$store.state.searchList;
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  height: 40px;

  &__label {
    flex: 0 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 10px 0;

    img {
      max-height: 100%;
    }
  }
  &__input {
    height: 100%;
    background-color: transparent;
    color: inherit;
    border: 0;
    border-bottom: 2px solid $color-fg;

    &:focus {
      outline: 0;
      border-color: $color-accent;
    }
  }
}
</style>