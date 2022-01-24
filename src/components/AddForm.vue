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
    <div class="form__group">
      <form-button class="form__item" type="submit">Add Movie</form-button>
      <form-button class="form__item" type="reset">Clear form</form-button>
    </div>
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
    gap: 0 15px;
  }
  &__item {
    flex: 1 1 auto;
  }
}
</style>