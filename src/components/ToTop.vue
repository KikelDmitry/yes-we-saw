<template>
  <button class="to-top is-hidden" type="button">
    <span class="visually-hidden">Scroll to top</span>
    <span class="to-top__icon">
      <img :src="icon" alt="Double arrows top" />
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      icon: require("../assets/img/arrow-up-icon.svg"),
    };
  },
  mounted() {
    let root = this.$root.$el,
      btn = this.$el,
      topOffset = 0.7;
    root.onscroll = () => {
      if (root.scrollTop > root.offsetHeight * topOffset) {
        btn.classList.remove("is-hidden");
      } else {
        btn.classList.add("is-hidden");
      }
    };
    btn.onclick = () => {
      document.querySelector(".header").scrollIntoView({
        behavior: "smooth",
      });
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

  opacity: 1;
  visibility: visible;
  pointer-events: all;

  transition: all 300ms;

  &__icon {
    display: flex;
    padding: 20px;
  }

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>