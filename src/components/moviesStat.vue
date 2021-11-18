<template>
  <div>
    Всего фильмов:
    {{ func() }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      func() {
        setTimeout(() => {
          this.$store.state.movieList.length;
        }, 2000);
      },
    };
  },
  computed: {
    // summary() {
    //   setTimeout(() => {
    //     return this.$store.state.movieList.length;
    //   }, 2000);
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>