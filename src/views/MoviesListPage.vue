<template>

  <main-content :addClass="title.toLowerCase()">
    <movies-table> </movies-table>
  </main-content>
</template>

<script>
import MainContent from "./AppPage.vue";
import MoviesTable from "../components/table/MoviesTable.vue";

export default {
  components: {
    MainContent,
    MoviesTable,
  },
  data() {
    return {
      title: "Stat-page",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>