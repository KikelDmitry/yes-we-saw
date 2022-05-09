<template>
  <tr class="table__row table__row--heading">
    <th v-for="field in fields" :key="field" class="cell">
      {{ field }}
      <button class="table__sort">
        <span class="visually-hidden"> Sort by {{ field }} </span>
      </button>
    </th>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fields: 'movieFields',
    })
  }
}
</script>

<style lang="scss" scoped>
.cell {


}
</style>