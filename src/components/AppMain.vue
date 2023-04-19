<script>
import { store } from "../store";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ul v-for="movie in store.movies" :key="movie.id">
    <li>{{ movie.title }}</li>
    <li>{{ movie.original_title }}</li>
    <li>{{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>
  </ul>
</template>

<style scoped lang="scss"></style>
