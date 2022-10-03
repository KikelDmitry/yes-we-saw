<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view></router-view>
    <theme-switcher></theme-switcher>
  </div>
  <is-loading v-if="isLoading"></is-loading>
</template>

<script>
import { mapGetters } from "vuex";
import IsLoading from "./components/IsLoading.vue";
import TheHeader from "./components/TheHeader.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

export default {
  components: {
    IsLoading,
    TheHeader,
    ThemeSwitcher,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
    }),
  },
  methods: {
    getMovies() {
      this.$store.state.listLoaded = true;
      fetch("test-list.json")
        .then((res) => res.json())
        .then((json) => {
          this.$store.state.movieList = json;
        })
        .then((this.$store.state.listLoaded = true))
        .catch((err) => console.log(err));
      this.$store.state.listLoaded = false;
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss">
:root {
  --form-row-height: 60px;

  @include df(420) {
    --form-row-height: 44px;
  }
}
html {
  font-family: sans-serif;
}
body {
  min-height: 100vh;
  background-color: $color-bg;
  background-image: linear-gradient(
    135deg,
    lighten($color-bg, 3%),
    darken($color-bg, 3%)
  );
  color: $color-fg;
}
#app {
  min-height: inherit;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
