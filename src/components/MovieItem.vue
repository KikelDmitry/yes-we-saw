<template>
  <article class="movie" ref="card" :class="movieCardClass">
    <h2 class="movie__title">{{ title }}</h2>
    <div class="movie__date">{{ date }}</div>
    <div class="movie__type">{{ movieType(type) }}</div>
    <div v-if="rewatch" class="movie__rewatch">Пересмотрен</div>
    <div v-if="alone" class="movie__alone">В одиночку</div>
    <div v-if="note && noteIsVisible" class="movie__note">{{ note }}</div>
    <div class="movie__controls">
      <div class="movie__controls-block">
        <control-item
          :link="kpLink"
          title="Искать на кинопоиске"
          target="_blank"
        >
          <img src="@/assets/img/kinopoisk.svg" alt="Kinopoisk logo" />
        </control-item>
        <control-item v-if="note" :method="toggleNote" class="movie__show-note"
          >ℹ️</control-item
        >
      </div>
      <div class="movie__controls-block movie__controls-block--main">
        <control-item :method="inProgress" descr="Редактировать"
          >✏️</control-item
        >
        <control-item :method="inProgress" descr="Удалить">❌</control-item>
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
    movieCardClass() {
      return this.noteIsVisible ? "is-blured" : "";
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
      alert("Feature in progess");
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
  padding-right: calc(var(--pad) + 40px);
  background-color: $color-bg;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  border-radius: 6px;

  &.is-blured {
    & > *:not(.movie__note) {
      filter: blur(3px);
      transition: filter 100ms ease-in-out;
    }
  }
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
    left: var(--pad);
    z-index: 100; //tooltip
    max-height: 50%;
    padding: calc(var(--pad) / 3) calc(var(--pad) / 1.3);
    overflow-y: auto;
    background-color: inherit;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    text-align: right;
    line-height: 1.3;

    &::-webkit-scrollbar {
      width: 8px;

      &-thumb {
        background-color: #ddd;

        &:hover {
          background-color: #fff;
        }
      }
      &-track {
        background-color: #1c1c1e;
      }
      &-button {
        display: none;
      }
    }
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