<script>
export default {
  name: "Appcard",
  props: {
    movie: Object,
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(img) {
      const imgUrl = new URL(`../assets/img/${img}.png`, import.meta.url);
      if (imgUrl.href.includes("undefined")) {
        return false;
      } else {
        return imgUrl.href;
      }
    },
  },
};
</script>

<template>
  <li>{{ movie.title }}</li>
  <li>{{ movie.original_title }}</li>
  <li>
    <img
      :src="getImgUrl(movie.original_language)"
      :alt="movie.title"
      v-if="getImgUrl(movie.original_language)"
    />
    <div v-else>{{ movie.original_language }}</div>
  </li>
  <li>{{ movie.vote_average }}</li>
</template>

<style scoped lang="scss">
li {
  list-style-type: none;

  img {
    width: 30px;
    object-fit: cover;
  }
}
</style>
