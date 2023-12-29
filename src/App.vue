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
    fetch("movies.json")
      .then((res) => res.json())
      .then((json) => {
        return json;
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

  // &::-webkit-scrollbar {
  //   width: 16px;

  //   &-track {
  //     background-color: transparent;

  //     &:hover {
  //       background-color: rgba(0, 0, 0, 0.15);
  //     }
  //   }
  //   &-thumb {
  //     background-image: linear-gradient(
  //       0deg,
  //       $color-bg 0,
  //       lighten($color-bg, 18%) 50%,
  //       $color-bg 100%
  //     );
  //     box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
  //   }
  //   &-corner {
  //     background-color: lighten($color-bg, 25%);
  //   }
  // }

  &__inner {
    min-height: 100vh;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;

    @include df(768) {
      padding: 0;
    }
  }
}
</style>
