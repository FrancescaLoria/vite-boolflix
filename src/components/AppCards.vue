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
    divideGradeAverage(returnDifferrence) {
      const numb = Math.ceil(this.content.vote_average / 2);
      if (!returnDifferrence) {
        return numb;
      } else {
        return 5 - numb;
      }
    },
  },
};
</script>

<template>
  <div class="ms_card">
    <div class="card-img">
      <img :src="`https://image.tmdb.org/t/p/w342${content.poster_path}`" />
    </div>
    <div class="card-info p-3 mb-3">
      <div>{{ content.title }}</div>
      <div>{{ content.name }}</div>
      <div>{{ content.original_title }}</div>
      <div class="flag-language">
        <img
          :src="getImgUrl(content.original_language)"
          :alt="content.title"
          v-if="getImgUrl(content.original_language)"
        />
        <div v-else>{{ content.original_language }}</div>
      </div>

      <div class="ms-stars">
        <FontAwesomeIcon
          icon="fa-sodivd fa-star"
          v-for="star in divideGradeAverage(false)"
        />
        <FontAwesomeIcon
          icon="fa-regular fa-star"
          v-for="star in divideGradeAverage(true)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ms_card {
  height: 350px;
  margin: 15px 0;
  border: 2px solid white;

  .card-info {
    display: none;
  }

  .card-info > div {
    margin-bottom: 10px;
  }

  .flag-language {
    img {
      width: 30px;
      object-fit: cover;
    }
  }

  .ms-stars {
    color: rgb(255, 255, 106);
  }

  .card-img {
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
.ms_card:hover {
  .card-info {
    display: block;
  }

  .card-img {
    display: none;
  }
}
</style>
