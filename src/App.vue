<template>
  <div class="root">
    <div class="root__inner">
      <the-header id="header"></the-header>
      <main-menu></main-menu>
      <router-view></router-view>
      <to-top></to-top>
    </div>
  </div>
</template>


<script>
import TheHeader from "@/components/TheHeader.vue";
import MainMenu from "@/components/MainMenu.vue";
import ToTop from "@/components/ToTop.vue";

export default {
  components: {
    TheHeader,
    MainMenu,
    ToTop,
  },
  methods: {
    sortBy(arr) {
      return arr.sort((a, b) => a.title > b.title);
    },
  },
  mounted() {
    fetch("list.json")
      .then((res) => res.json())
      .then((json) => {
        return this.sortBy(json);
      })
      .then((list) => {
        this.$store.state.moviesList = list;
      })
      .then((this.$store.state.isLoading = false))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
html {
  font-family: "Ubuntu", sans-serif;
}

body {
  background-color: $color-bg;
  background-image: linear-gradient(
    135deg,
    lighten($color-bg, 3%),
    darken($color-bg, 3%)
  );
  color: $color-fg;
}

.root {
  width: 100%;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: gray;

    &-thumb {
      background-color: black;
    }
  }

  &__inner {
    height: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 15px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    align-content: flex-start;
  }
}

.resizer {
  max-width: 1220px;
  margin: 0 auto;

  &--small {
    max-width: 768px;
  }

  &--huge {
    max-width: 2560px;
  }
}
</style>
