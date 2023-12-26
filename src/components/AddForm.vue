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