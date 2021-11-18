<template>
  <form @submit.prevent="addMovie" class="form">
    <label class="form__label">
      <span class="form__title">Title</span>
      <input v-model="input.title" type="text" class="form__text" />
    </label>
    <label class="form__label">
      <span class="form__title">Date</span>
      <input
        v-model="input.date"
        type="date"
        class="form__date"
        :max="input.date"
      />
    </label>
    <label class="form__label">
      <span class="form__title">Type</span>
      <input v-model="input.type" type="radio" />
    </label>
    <button type="submit">Add movie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: {
        title: "",
        date: new Date().toISOString().slice(0, 10),
        type: "movie",
        rewatch: false,
        alone: false,
      },
    };
  },
  methods: {
    addMovie() {
      this.$store.state.movieList.push(this.input);
      this.input = {};
      alert("Movie added");
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  &__label {
    display: flex;
  }
  &__title {
  }
  &__text {
  }
}
</style>