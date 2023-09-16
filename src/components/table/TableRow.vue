<template>
  <tr class="row">
    <td
      v-for="(field, idx) in fields"
      :key="field"
      class="cell"
      :class="`cell--${field.toLowerCase()}`"
      :data-num="idx === 0 ? num : null"
    >
      <!-- if note -->
      <input
        v-if="field === 'note'"
        type="text"
        class="cell__input cell__content"
        :value="movie[field]"
      />

      <!-- if title -->
      <to-imbd v-else-if="field === 'title'" :title="movie[field]">
        {{ outputProp(movie[field]) }}
      </to-imbd>

      <!-- <span v-else> -->
      <span v-else class="cell__content">
        {{ outputProp(movie[field]) }}
      </span>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
import ToImbd from "../ToImbd.vue";

export default {
  components: {
    ToImbd,
  },
  props: ["movie", "num"],
  data() {
    return {
      icon: require("../../assets/img/kinopoisk.svg"),
    };
  },
  computed: {
    ...mapGetters({
      fields: "movieFields",
    }),
    hiddenTitle() {
      // console.log(this.$refs)
      return 2;
    },
  },
  methods: {
    outputProp(prop) {
      if (typeof prop == "boolean") {
        return prop === true ? "x" : null;
      } else {
        return prop;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cell {
  $cell-padding: 0.1em 0.55em;
  padding: $cell-padding;
  // height: 32px;
  white-space: nowrap;
  border-radius: 4px;
  transition-property: background-color, color;
  transition-timing-function: linear;

  &--rewatch,
  &--series,
  &--alone,
  &--date {
    width: 0;
    text-align: center;
  }
  &--title {
    position: relative;
    max-width: 220px;

    &::before {
      content: attr(data-num);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: inherit;
      border-radius: inherit;
      transform: translateX(calc((100% + 4px) * -1));
      background-color: inherit;
      color: $color-fg;
      text-align: center;
      font-weight: 700;
      font-size: 0.9em;
    }
    @include df(768) {
      position: sticky;
      left: 0;
      // background-color: inherit;
      padding-right: 4%;
      background-image: linear-gradient(
        90deg,
        lighten($color-bg, 10%) 0%,
        lighten($color-bg, 10%) 85%,
        transparent 100%
      );
    }
  }
  &--note {
    max-width: 100px;
    padding: 0;
    overflow: hidden;
  }
  &:hover {
    background-color: lighten($color-bg, 14%);
    color: #fff;
  }
  &__kp {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px 10px;
  }
  &__content {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__input {
    background-color: inherit;
    color: inherit;
    border: 0;
    padding: $cell-padding;
    transition: background-color 200ms;
    transition: inherit;

    &:focus {
      outline: 0;
    }
  }
  &:focus-within {
    background-color: lighten($color-bg, 35%);
  }
}
.row {
  position: relative;
}
</style>