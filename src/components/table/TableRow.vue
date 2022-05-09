<template>
  <tr>
    <!-- <td v-for="(val, key, idx) in movie" :key="idx" class="cell" :class="`cell--${key.toLowerCase()}`">
      {{ outputProp(val) }}
    </td> -->
    <td v-for="field in fields" :key="field" class="cell" :class="`cell--${field.toLowerCase()}`">
      {{ outputProp(movie[field]) }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ["movie"],
  computed: {
    ...mapGetters({
      fields: 'movieFields'
    }),
  },
  methods: {
    outputProp(prop) {
      if (typeof prop == "boolean") {
        return prop === true ? "V" : "X";
      } else {
        return prop;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 7px 10px;
  height: 32px;
  white-space: nowrap;
  border-radius: 4px;

  &--title {
    max-width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &--rewatch,
  &--series,
  &--alone {
    width: 85px;
    text-align: center;
  }

  &--note {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>