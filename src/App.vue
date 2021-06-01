<template>
  <nav-bar />
  <div class="flex">
    <side-nav v-if="isLoggedIn" />
    <div class="container">
      <main class="flex-grow">
        <Login v-if="!isLoggedIn" />
        <router-view />
      </main>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
