<template>
  <nav-bar />
  <div class="flex">
    <side-nav />
    <div class="container">
      <main class="flex-grow">
        <Login />
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";
import Login from "@/components/auth/Login";
import { initJsStore } from "./service/idbService";

export default {
  components: {
    NavBar,
    SideNav,
    Login,
  },
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();
      if (isDbCreated) {
        console.log("db created");
      } else {
        console.log("db opened");
      }
    } catch (ex) {
      console.error(ex);
      alert(ex.message);
    }
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
