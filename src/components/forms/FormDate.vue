<template>
  <input
    type="date"
    class="form-date"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
.form-date {
}
</style>