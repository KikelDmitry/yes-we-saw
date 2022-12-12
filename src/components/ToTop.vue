<template>
  <button
    class="to-top"
    :class="{ 'is-hidden': !visibility }"
    type="button"
    @click="scrollToTop()"
    :tabindex="tabindex"
  >
    <span class="visually-hidden">{{title}}</span>
    <span class="to-top__icon">
      <img :src="icon" :alt="title + ' icon'" />
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      title: "Scroll to top",
      icon: require("../assets/img/arrow-up-icon.svg"),
      visibility: false,
    };
  },
  methods: {
    isVisible(state) {
      state ? (this.visibility = true) : (this.visibility = false);
    },
    scrollToTop() {
      document.querySelector("#header").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  computed: {
    tabindex() {
      return this.visibility ? 0 : -1;
    },
  },
  mounted() {
    let root = this.$root.$el,
      topOffset = 0.4;
    root.onscroll = () => {
      let pos = root.scrollTop > root.offsetHeight * topOffset;
      this.isVisible(pos);
    };
  },
};
</script>

<style lang="scss" scoped>
.to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #aaa;
  color: #222;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  transform: scale(1);
  opacity: 0.5;
  visibility: visible;
  pointer-events: all;

  transition: all 200ms ease-in-out;

  &__icon {
    display: flex;
    padding: 20px;
  }

  &:hover {
    opacity: 1;
  }
  &.is-hidden {
    transform: scale(0.6);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>