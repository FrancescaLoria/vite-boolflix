<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="d-flex align-items-center">
    <div class="container-fluid d-flex justify-content-between">
      <div class="logo">
        <h2>Boolflix</h2>
      </div>
      <div class="ms_searchbar d-flex align-items-center">
        <input
          type="text"
          placeholder="cerca"
          v-model="store.searchInputValue"
        />
        <button @click="$emit('searchNetflix')">cerca</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: black;
  height: 80px;
}
</style>
