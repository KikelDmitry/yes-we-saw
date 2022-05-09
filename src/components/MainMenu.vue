<template>
  <nav class="main-menu">
    <router-link
      class="main-menu__link link"
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      >{{ route.name }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-menu {
  --gap: 20px;
  --height: 40px;

  width: 100%;
  // height: var(--height);
  display: flex;
  justify-content: center;
  column-gap: var(--gap);
  padding: 10px 0 15px;

  @include mf(768) {
    --height: 50px;
  }
  @include mf(960) {
    --height: 60px;
  }
  &__link {
    height: var(--height);
    flex-basis: 0;

    @include mf(500) {
      // min-height: 60px;
    }
  }
}
.link {
  --color-one: #fff;
  --color-two: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6em 1em;

  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.12;
  text-transform: uppercase;
  // letter-spacing: 0.02em;
  border-radius: 6px;

  box-shadow: 10px 10px 20px #000;
  background-color: #fff;
  background-image: linear-gradient(
    315deg,
    var(--color-one),
    var(--color-two),
    var(--color-one)
  );
  color: #000;

  &.is-active {
    --color-one: #0000bd;
    --color-two: #fff;
  }
}
</style>