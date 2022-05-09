<template>
  <div class="preloader" v-if="$store.state.isLoading">
    <div class="preloader__icon">
      <img width="150" height="150" :src="image" alt="spin lines">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("../assets/img/preloader.svg"),
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  backdrop-filter: blur(5px);

  &__icon {
    width: 150px;
    height: 150px;
    margin: auto;

    @include df(450) {
      width: 60px;
      height: 60px;
    }
  }
}
</style>