<script>
import { store } from "../store";
import AppCard from "./AppCards.vue";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <ul v-for="movie in store.movies" :key="movie.id">
    <AppCard :content="movie" />
  </ul>
  <ul v-for="series in store.series" :key="series.id">
    <AppCard :content="series" />
  </ul>
</template>

<style scoped lang="scss"></style>
