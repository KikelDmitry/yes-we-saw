<template>
  <nav class="menu">
    <router-link to="/" class="menu__item">Add Movie</router-link>
    <router-link to="/list" class="menu__item">Movies list</router-link>
    <router-link to="/stat" class="menu__item">Statistics</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  &__item {
    padding: 0 0.4em;
    margin: 0.4em 0.2em;
    font-size: 1.2rem;
    border-radius: 1em;
    white-space: nowrap;

    &.is-active {
      background-color: $color-fg;
      color: $color-bg;
    }
  }
}
</style>