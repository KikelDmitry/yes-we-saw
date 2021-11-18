<template>
  <nav class="menu">
    <router-link to="/" class="menu__item">Add Movie</router-link>
    <router-link to="/list" class="menu__item">Movies list</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    padding: 0 0.2em;
    font-size: 1.2rem;
  }
}
</style>