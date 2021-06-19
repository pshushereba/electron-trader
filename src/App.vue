<template>
  <div>
    <nav-bar />
    <div class="flex container">
      <side-nav v-if="isLoggedIn" />
      <div class="container">
        <main class="container">
          <Login v-if="!isLoggedIn" />
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";
import Login from "@/components/auth/Login";
import { mapGetters } from "vuex";
export default {
  name: "ElectronTrader",
  components: {
    NavBar,
    SideNav,
    Login,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
