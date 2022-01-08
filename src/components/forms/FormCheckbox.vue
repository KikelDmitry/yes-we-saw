<template>
  <input
    type="checkbox"
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>