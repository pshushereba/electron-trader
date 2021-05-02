<template>
  <aside
    class="flex flex-col items-stretch bg-white shadow-md border-r border-gray-300 nav-height"
  >
    <router-link to="/dashboard" class="mt-5 py-3 px-5">
      <!-- <span class="icon"> Dashboard </span> -->
      <span class="link-text">Dashboard</span>
    </router-link>
    <router-link to="/exchanges" class="py-3 px-5">
      <!-- <span class="icon"> Exchanges </span> -->
      <span class="link-text">Exchanges</span>
    </router-link>
    <router-link to="/settings" class="py-3 px-5">
      <span class="icon">
        <!-- <settings-icon :color="pathColor('settings')" /> -->
      </span>
      <span class="link-text">Settings</span>
    </router-link>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-height {
  height: calc(100vh - 4rem);
}
</style>
