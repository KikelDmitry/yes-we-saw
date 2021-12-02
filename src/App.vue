<template>
  <div class="wrapper">
    <div class="app-title">YES, WE SAW!</div>
    <the-nav></the-nav>
    <router-view></router-view>
  <theme-switcher></theme-switcher>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  components: {
    TheNav,
    ThemeSwitcher,
  },
};
</script>

<style lang="scss">
html {
  font-family: sans-serif;
}
body {
  min-height: 200vh;
  background-color: $color-bg;
  color: $color-fg;
}
#app {
  min-height: inherit;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.app-title {
  margin: 0.5em 0;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
</style>
