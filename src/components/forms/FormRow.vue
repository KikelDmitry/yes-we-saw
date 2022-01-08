<template>
  <fieldset class="form-row">
    <legend class="form-row__legend">
      {{ title }}
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.form-row {
  width: 100%;
  min-height: 60px;
  color: $color-fg;

  &__input {
    min-width: 0;
    width: 100%;
  }
}
</style>