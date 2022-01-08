<template>
  <button class="form-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form-btn {
  height: var(--form-row-height);
  padding: 0.2em 1em;
  font-size: 22px;
  font-weight: bold;
  background-color: $color-fg;
  color: $color-bg;

  &:hover {
    background-color: $color-accent;
  }
}
</style>