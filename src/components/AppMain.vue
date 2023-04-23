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
  <main>
    <div class="container pt-5">
      <div>
        <h2 class="title-movies" v-if="store.movies.length > 0">MOVIES</h2>
        <ul class="row row-cols-5 d-flex">
          <li v-for="movie in store.movies" :key="movie.id">
            <AppCard :content="movie" />
          </li>
        </ul>
        <h2 class="title-series" v-if="store.series.length > 0">SERIES</h2>
        <ul class="row row-cols-5 d-flex">
          <li v-for="series in store.series" :key="series.id">
            <AppCard :content="series" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
li {
  list-style-type: none;
  background-color: black;
  color: white;
}

.title-movies,
.title-series {
  color: red;
}
</style>
