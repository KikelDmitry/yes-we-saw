<template>
  <article class="movie">
    <h2 class="movie__title">{{ title }}</h2>
    <div class="movie__date">{{ date }}</div>
    <div class="movie__type">{{ movieType(type) }}</div>
    <div v-if="rewatch" class="movie__rewatch">Пересмотрен</div>
    <div v-if="alone" class="movie__alone">В одиночку</div>
    <div v-if="note && noteIsVisible" class="movie__note">{{ note }}</div>
    <div class="movie__controls">
      <!-- <button
        @click="inProgress"
        class="movie__button movie__delete"
        type="button"
        title="Удалить"
      >
        ❌
      </button>
      <button
        @click="inProgress"
        class="movie__button movie__edit"
        type="button"
        title="Редактировать"
      >
        ✏️
      </button> -->
      <button
        v-if="note"
        class="movie__button movie__show-note"
        @click="toggleNote()"
        type="button"
        title="Show note"
      >
        🗒️
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rewatch: {
      type: Boolean,
      required: true,
    },
    alone: {
      type: Boolean,
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      noteIsVisible: false,
    };
  },
  computed: {},
  methods: {
    movieType(movie) {
      const types = {
        movie: "Фильм",
        series: "Сериал",
      };
      return types[movie];
    },
    toggleNote() {
      this.noteIsVisible = !this.noteIsVisible;
    },
    deleteMovie(title) {
      console.log(
        this.$store.state.movieList.find((movie) => movie.title == title)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  --pad: 15px;
  --btn-size: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  position: relative;
  padding: var(--pad);
  padding-right: calc(var(--pad) + var(--btn-size) + 5px);
  background-color: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @include df(560) {
    --pad: 10px;
    --btn-size: 44px;
  }

  &__title {
    font-size: 1.3rem;
    line-height: 1;
    margin-bottom: 1em;
  }
  &__note {
    position: absolute;
    bottom: var(--pad);
    right: var(--pad);
    background-color: inherit;
    text-align: right;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--btn-size);
    height: var(--btn-size);
  }
  &__controls {
    position: absolute;
    inset: var(--pad);
    left: auto;
    width: var(--btn-size);
  }
}
</style>