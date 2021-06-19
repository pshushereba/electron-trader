<template>
  <div>
    <h1>Dashboard</h1>
    <PositionsListCard />
  </div>
</template>

<script>
import PositionsListCard from "../components/PositionsListCard.vue";

export default {
  name: "Dashboard",
  components: {PositionsListCard}
};
</script>

<style scoped></style>
