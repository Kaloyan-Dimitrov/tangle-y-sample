<template>
  <div id="app" class="d-flex">
    <AddColumn />
    <CurrentRules />
  </div>
</template>

<script>
import AddColumn from "./components/AddColumn.vue";
import CurrentRules from "./components/CurrentRules.vue";
export default {
  name: "App",
  components: {
    AddColumn,
    CurrentRules
  }
};
</script>

<style>
#app {
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
