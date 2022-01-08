<template>
  <label v-for="(value, idx) in values" :key="value">
    <span>{{ value }}</span>
    <input
      :checked="idx == 0 ? true : false"
      :value="value"
      type="radio"
      name="type"
      @input="$emit('update:value', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
    },
  },
};
</script>