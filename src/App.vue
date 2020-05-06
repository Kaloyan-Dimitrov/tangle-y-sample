<template>
  <div id="app" class="d-flex">
    <AddColumn />
    <CurrentRules />
    <b-form-select v-model="selected" :options="columns" size="sm" class="mr-3 w-25"></b-form-select>
    <b-button size="sm" @click="requestRows()">Request rows, ordered by name</b-button>
    Rows: {{this.rows}}
  </div>
</template>

<script>
import AddColumn from "./components/AddColumn.vue";
import CurrentRules from "./components/CurrentRules.vue";
import { db } from "./firebaseConfig.js";
export default {
  name: "App",
  components: {
    AddColumn,
    CurrentRules
  },
  data() {
    return {
      selected: null,
      columnsRaw: [],
      rows: ""
    };
  },
  computed: {
    columns: function() {
      if (this.columnsRaw[0] != null && this.columnsRaw[0] != undefined)
        return Object.keys(this.columnsRaw[0]);
      else return ["Loading"];
    }
  },
  methods: {
    async requestRows() {
      this.rows = (
        await db
          .ref("dashboards/customer1/models/" + this.selected)
          .orderByChild("name")
          .once("value")
      ).toJSON();
    }
  },
  firebase: {
    columnsRaw: db.ref("dashboards/customer1")
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
