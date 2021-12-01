<template>
  <article class="movie">
    <h2 class="movie__title">{{ title }}</h2>
    <div class="movie__date">{{ date }}</div>
    <div class="movie__type">{{ movieType(type) }}</div>
    <div v-if="rewatch" class="movie__rewatch">Пересмотрен</div>
    <div v-if="alone" class="movie__alone">В одиночку</div>
    <div v-if="note && noteIsVisible" class="movie__note">{{ note }}</div>
    <div class="movie__controls">
      <div class="movie__controls-block">
        <a
          :href="kpLink"
          title="Искать на Кинопоиске"
          class="movie__button movie__kp"
          target="_blank"
        >
          <img src="@/assets/img/kinopoisk.svg" alt="Kinopoisk logo" />
        </a>
        <!-- <button
          v-if="note"
          class="movie__button movie__show-note"
          @click="toggleNote()"
          type="button"
          title="Show note"
        >
          🗒️
        </button> -->
        <control-item
          v-if="note"
          :method="toggleNote"
          :class="
            noteIsVisible ? 'movie__note movie__note--visible' : 'movie__note'
          "
          >🗒️</control-item
        >
      </div>
      <div class="movie__controls-block movie__controls-block--main">
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
        <!-- <control-item :method="inProgress">Hello</control-item>
        <control-item :method="inProgress">Test</control-item> -->
      </div>
    </div>
  </article>
</template>

<script>
import ControlItem from "./ControlItem.vue";

export default {
  components: { ControlItem },
  componenets: {
    ControlItem,
  },
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
  computed: {
    kpLink() {
      return `https://www.kinopoisk.ru/index.php?kp_query=${this.title}`;
    },
  },
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
    inProgress() {
      alert("Не запилено!");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  --pad: 15px;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  position: relative;
  padding: var(--pad);
  background-color: $color-bg;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  border-radius: 6px;

  @include df(560) {
    --pad: 10px;
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
    z-index: 100; //tooltip
    max-width: 50%;
    padding: calc(var(--pad) / 2);
    background-color: inherit;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    text-align: right;
    border-radius: 3px;
  }
  &__kp {
    padding: 4px;
  }
  &__controls {
    position: absolute;
    inset: var(--pad);
    left: auto;
    width: var(--btn-size);
    display: flex;
    flex-direction: column;

    &-block {
      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &--main {
        margin-top: auto;
      }
    }
  }
}
</style>