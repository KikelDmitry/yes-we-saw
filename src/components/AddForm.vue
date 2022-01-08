<template>
  <form @submit.prevent="addMovie" class="form">
    <form-row title="Title">
      <form-text type="text" v-model="input.title"></form-text>
    </form-row>
    <form-row title="Date">
      <form-date :max="params.maxDate" v-model="input.date"></form-date>
    </form-row>
    <form-row title="Type">
      <form-radio
        :values="['movie', 'series']"
        v-model="input.type"
      ></form-radio>
    </form-row>
    <form-row title="Rewatch">
      <form-checkbox v-model="input.rewatch"></form-checkbox>
    </form-row>
    <form-row title="Alone">
      <form-checkbox v-model="input.alone"></form-checkbox>
    </form-row>
    <form-row title="Notes">
      <form-textarea v-model="input.note"></form-textarea>
    </form-row>
    <!-- <fieldset class="form-row">
    <legend class="form-row__legend">
      <label class="form-row__label" :for="id">
        {{ title }}
      </label>
    </legend>
    <form-text :id="id"></form-text>
  </fieldset> -->
    <!-- <fieldset class="form__group">
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
    </fieldset> -->
    <form-button type="submit">Add Movie</form-button>
  </form>
</template>

<script>
import FormRow from "./forms/FormRow.vue";
import FormText from "./forms/FormText.vue";
import FormDate from "./forms/FormDate.vue";
import FormRadio from "./forms/FormRadio.vue";
import FormCheckbox from "./forms/FormCheckbox.vue";
import FormTextarea from "./forms/FormTextarea.vue";
import FormButton from "./forms/FormButton.vue";

export default {
  components: {
    FormRow,
    FormText,
    FormDate,
    FormRadio,
    FormCheckbox,
    FormTextarea,
    FormButton,
  },
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
  margin: 0 auto;
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