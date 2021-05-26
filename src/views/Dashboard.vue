<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.user);
  },
};
</script>

<style scoped></style>
