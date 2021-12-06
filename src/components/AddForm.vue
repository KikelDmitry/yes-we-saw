<template>
  <form @submit.prevent="addMovie" class="form">
    <fieldset class="form__group">
      <legend class="form__title">Title</legend>
      <label class="form__label">
        <input v-model="input.title" type="text" class="form__text" />
      </label>
    </fieldset>
    <fieldset class="form__group">
      <legend class="form__title">Date</legend>
      <label class="form__label">
        <span class="visually-hidden">Date</span>
        <input
          v-model="input.date"
          type="date"
          class="form__date"
          :max="params.maxDate"
        />
      </label>
    </fieldset>
    <fieldset class="form__group">
      <legend class="form__title">Type</legend>
      <label class="form__label">
        <input
          v-model="input.type"
          type="radio"
          name="type"
          value="movie"
          checked
        />
        <span class="form__label-title">Movie</span>
      </label>
      <label class="form__label">
        <input v-model="input.type" type="radio" name="type" value="series" />
        <span class="form__label-title">Series</span>
      </label>
    </fieldset>
    <fieldset class="form__group">
      <legend class="form__title">Rewatch</legend>
      <label class="form__label">
        <input v-model="input.rewatch" type="checkbox" />
        <span class="form__label-title">Rewatch</span>
      </label>
    </fieldset>
    <fieldset class="form__group">
      <legend class="form__title">Alone</legend>
      <label class="form__label">
        <input v-model="input.alone" type="checkbox" />
        <span class="form__label-title">Alone</span>
      </label>
    </fieldset>
    <fieldset class="form__group">
      <legend class="form__title">Notes</legend>
      <label class="form__label">
        <span class="form__label-title">Notes</span>
        <textarea v-model="input.note"></textarea>
      </label>
    </fieldset>
    <button type="submit">Add movie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      params: {
        maxDate: new Date(Date.now()).toISOString().slice(0, 10),
      },
      input: {
        title: "",
        date: new Date().toISOString().slice(0, 10),
        type: "movie",
        rewatch: false,
        alone: false,
        note: "",
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
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  &__group {
    display: flex;
  }
  &__title {
  }
  &__text {
  }
}
</style>