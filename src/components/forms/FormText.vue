<template>
  <input @input="$emit('update:modelValue', $event.target.value)" class="form-input" />
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
.form-input {
  width: 100%;
  min-width: 0;
  min-height: 30px;
  background-color: transparent;
  color: inherit;
  border: 2px solid transparent;
  border-bottom-color: currentColor;
  transition: border-color 200ms;

  &:focus {
    outline: 0;
    border-color: $color-accent;
  }
}
</style>