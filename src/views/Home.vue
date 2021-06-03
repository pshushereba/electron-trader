<template>
  <div class="home">
    <p class="text-md">Home Test</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["userDetails"]),
  },
};
</script>
