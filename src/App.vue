<script>
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    searchNetflix() {
      axios
        .get(store.urlMovies, {
          params: {
            query: store.searchInputValue,
          },
        })
        .then((resp) => {
          store.movies = resp.data.results;
          console.log("MOVIES", resp.data.results);
        });
      axios
        .get(store.urlSeries, {
          params: {
            query: store.searchInputValue,
          },
        })
        .then((resp) => {
          store.series = resp.data.results;
          console.log("SERIES", resp.data.results);
        });
    },
  },
};
</script>

<template>
  <AppHeader @searchNetflix="searchNetflix" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
