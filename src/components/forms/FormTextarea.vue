<template>
  <textarea
    @input="$emit('update:modelValue', $event.target.value)"
    class="form-textarea"
  ></textarea>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-textarea {
  resize: vertical;
  width: 100%;
  max-width: 100%;
  height: 5em;
  min-height: 2em;
  max-height: 500px;
}
</style>