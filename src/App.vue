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
          console.log(store.movies);
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
