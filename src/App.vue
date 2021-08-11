<template>
  <div id="app">
    <div class="navbar">
      <Books />
    </div>
  </div>
</template>

<script>
import Books from "./components/Books.vue";


export default {
  name: "app",
  components: {
    Books
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.navbar {
  background: rgb(225,24,76);
  background: linear-gradient(115deg, rgba(225,24,76,1) 0%, rgba(255,102,51,1) 35%, rgba(255,130,118,1) 100%);
  width: 100%;
  height: 100vh;
  position: absolute;
}

</style>
