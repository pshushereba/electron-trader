<template>
  <div class="home">
    <p class="text-md">Home Test</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import { getAlpacaAccount, getAlpacaPositions } from "../helpers/alpaca";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["userDetails"]),
  },
  mounted() {
    getAlpacaAccount();
    getAlpacaPositions();
  },
};
</script>
