<template>
  <a v-if="link" :href="link" class="button" title="descr"><slot></slot></a>
  <button
    v-else
    @click="method"
    :aria-label="descr"
    :class="classes"
    class="control"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
      required: false,
    },
    descr: {
      type: String,
      required: false,
    },
    method: {
      type: Function,
      default: () => console.log(false),
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.control {
  --btn-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--btn-size);
  height: var(--btn-size);

  @include df(560) {
    --btn-size: 44px;
  }
}
</style>