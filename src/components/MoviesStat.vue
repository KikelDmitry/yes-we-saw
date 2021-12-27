<template>
  <div class="stat">
    <div class="stat__item">Всего фильмов: {{ summary }}</div>
    <div class="stat__item">Пересмотренных: {{ rewatches }}</div>
    <div class="stat__item">Сериалов: {{ series }}</div>
    <div class="stat__item">В одиночку: {{ alone }}</div>
    <select @change="byYear" v-model="years">
      <option v-for="year in years" :key="year">
        {{ year }}
      </option>
    </select>
    <div>
      {{ byYear(2021) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: this.$store.state.movieList,
      years: [2020, 2021, 2022],
    };
  },
  computed: {
    summary() {
      return this.movies.length;
    },
    rewatches() {
      return this.movies.filter((movie) => {
        return movie.rewatch === true;
      }).length;
    },
    series() {
      return this.movies.filter((movie) => {
        return movie.type === "series";
      }).length;
    },
    alone() {
      return this.movies.filter((movie) => {
        return movie.alone === true;
      }).length;
    },
  },
  methods: {
    byYear(year) {
      return this.$store.state.movieList.filter((movie) => {
        return movie.date.includes(year);
      }).length;
    },
  },
};
</script>

<style lang="scss" scoped>
.stat {
  padding: 10px;
}
</style>