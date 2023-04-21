<script>
export default {
  name: "Appcard",
  props: {
    content: Object,
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
  <li>{{ content.title }}</li>
  <li>{{ content.name }}</li>
  <li>{{ content.original_title }}</li>
  <li>
    <img
      :src="getImgUrl(content.original_language)"
      :alt="content.title"
      v-if="getImgUrl(content.original_language)"
    />
    <div v-else>{{ content.original_language }}</div>
  </li>
  <li>{{ content.vote_average }}</li>
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
