import { reactive } from "vue";

export const store = reactive({
  urlMovies:
    "https://api.themoviedb.org/3/search/movie?api_key=bccd374f45e3747a609a86268cf3aad4",
  urlSeries:
    "https://api.themoviedb.org/3/search/tv?api_key=bccd374f45e3747a609a86268cf3aad4",

  searchInputValue: "",
  movies: [],
  series: [],
});
