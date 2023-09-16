<template>
  <form @submit="addMovie" class="add-form">
    <input type="text" v-model="input.date" @input="mask()" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: {
        date: null,
      },
    };
  },
  methods: {
    mask() {
      if (this.input.date.length % 2 == 0) {
        this.input.date += ".";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-form {
  input {
    display: block;

    &[type="text"] {
    }
  }
}
</style>