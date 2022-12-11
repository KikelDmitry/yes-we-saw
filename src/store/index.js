import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoading: true,
    moviesList: [],
    movieFields: [
      // "count",
      "title",
      "date",
      "series",
      "rewatch",
      "alone",
      "note",
    ]
  },
  getters: {
    moviesTotal(state) {
      return state.moviesList.length;
    },
    movieFields(state) {
      return state.movieFields;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
