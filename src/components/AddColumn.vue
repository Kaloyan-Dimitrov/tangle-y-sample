<template>
  <div class="d-flex">
    <b-form-input size="lg" v-model="colName" placeholder="Enter your column name"></b-form-input>
    <b-button type="submit" variant="primary" size="lg" class="ml-3" @click="submit()">Submit</b-button>
  </div>
</template>

<script>
import { functions, db } from "../firebaseConfig";
export default {
  name: "AddColumn",
  data() {
    return {
      colName: ""
    };
  },
  methods: {
    async submit() {
      await db.ref("dashboards/customer1/models" + this.colName).set({
        row1: {
          name: "test1"
        },
        row2: {
          name: "test2"
        }
      });
      await functions.httpsCallable("changeRules")({ colName: this.colName });
      this.$store.commit("updateRules");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
