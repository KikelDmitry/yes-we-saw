import { createStore } from 'vuex';
import {config} from './config';

export default createStore({
  state: {
    config,
    isLoading: true,
    moviesList: [],
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
    },
    config(state) {
      return state.config;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
