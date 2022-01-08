<template>
  <article class="movie" :class="movieCardClass" ref="card" @click="focus">
    <h2 class="movie__title" :title="title">{{ title }}</h2>
    <div class="movie__date">{{ date }}</div>
    <div class="movie__type">{{ movieType }}</div>
    <div v-if="rewatch" class="movie__rewatch">Пересмотрен</div>
    <div v-if="alone" class="movie__alone">В одиночку</div>
    <div v-if="note && noteIsVisible" @click="toggleNote" class="movie__note">
      <div class="movie__note-inner">
        {{ note }}
      </div>
    </div>
    <div class="movie__controls">
      <div class="movie__control">
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
      <div class="movie__control">
        <control-item :method="inProgress" descr="Редактировать"
          ><img src="@/assets/img/edit.svg" alt="Edit icon"
        /></control-item>
        <control-item :method="deleteMovie" descr="Удалить"
          ><img src="@/assets/img/delete.svg" alt="Trash icon"
        /></control-item>
      </div>
    </div>
  </article>
</template>

<script>
import ControlItem from "./ControlItem.vue";

export default {
  components: {
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
    movieType() {
      return this.$store.getters.movieTypes[this.type];
    },
  },
  methods: {
    toggleNote() {
      this.noteIsVisible = !this.noteIsVisible;
    },
    deleteMovie() {},
    inProgress() {
      alert("Feature in progess");
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  --font-size: 1rem;
  --pad: 1em;

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
  font-size: var(--font-size);

  &.is-blured {
    & > *:not(.movie__note) {
      filter: blur(4px) opacity(1);
      transition: filter 200ms ease-in-out 0ms;
    }
  }
  @include df(560) {
    --pad: calc(var(--font-size) / 2);
  }

  &__title {
    font-size: 1.3rem;
    line-height: 1;
    margin-bottom: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__note {
    position: absolute;
    inset: 0;
    z-index: 100; //tooltip
    margin: var(--pad);

    &-inner {
      position: absolute;
      bottom: 0;
      right: 0;
      // left: var(--pad);
      max-height: 50%;
      padding: calc(var(--pad) / 3) calc(var(--pad) / 1.3);
      overflow-y: auto;
      background-color: $color-bg;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      text-align: right;
      line-height: 1.4;

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

    &__control {
      flex: 1 1 auto;
    }
    // &-block {
    //   &:not(:last-child) {
    //     margin-bottom: 10px;
    //   }

    //   &--main {
    //     margin-top: auto;
    //   }
    // }
  }
}
</style>