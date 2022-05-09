import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: true,
    movieFields: [
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
