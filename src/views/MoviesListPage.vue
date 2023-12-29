<template>
  <main-content :addClass="title.toLowerCase()">
    <movies-table></movies-table>
    <div class="last-block">To be continued...</div>
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
.last-block {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-size: 6vmin;
  text-align: center;
  opacity: 0.6;
}
</style>