<template>
  <main-content :addClass="title.toLowerCase()">
    <div>duration: {{ moviesTotal }}</div>
  </main-content>
</template>

<script>
import { mapGetters } from "vuex";
import MainContent from "./AppPage.vue";

export default {
  components: {
    MainContent,
  },
  data() {
    return {
      title: "Stat-page",
    };
  },
  methods: {
    msToDays(ms) {
      ms;
    },
  },
  computed: {
    ...mapGetters(["moviesTotal"]),
    watchingDuration() {
      return this.$store.state.moviesList.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>