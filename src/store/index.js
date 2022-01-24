import { createStore } from 'vuex';

export default createStore({
  state: {
    config: {
      mainTitle: 'Yes, we saw!',
      movieTypes: {
        movie: 'Фильм',
        series: 'Сериал',
      },
    },
    listLoaded: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    projectName: state => {
      return state.config.mainTitle;
    },
    listLoaded: state => {
      return state.listLoaded;
    },
    movieTypes: state => {
      return state.config.movieTypes;
    },
  }
})
