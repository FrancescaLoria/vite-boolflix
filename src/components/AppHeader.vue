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
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="cerca"
          v-model="store.searchInputValue"
          @keyup.enter="$emit('searchNetflix')"
        />
        <button class="btn btn-sm ms-2" @click="$emit('searchNetflix')">
          cerca
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: black;
  height: 80px;

  .logo {
    color: red;
  }

  .btn {
    background-color: red;
    font-size: 15px;
  }
}
</style>
