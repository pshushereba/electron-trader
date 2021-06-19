<template>
  <div class="flex-col md:flex md:flex-row md:min-h-screen bg-gray-50">
    <div
      class="
        flex flex-col flex-shrink-0
        text-gray-700
        bg-white
        shadow-xl
        md:w-64
        md:h-full
      "
    >
      <nav class="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
        <ul>
          <li>
            <router-link to="/dashboard">
              <a
                class="
                  block
                  px-4
                  py-2
                  mt-2
                  text-base text-gray-500
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-l-4 border-blue-600
                  focus:shadow-outline
                  focus:outline-none
                  focus:ring-2
                  ring-offset-current ring-offset-2
                  hover:text-black
                "
                href="#"
                >Dashboard</a
              >
            </router-link>
          </li>
          <li>
            <router-link to="/exchanges">
              <a
                class="
                  block
                  px-4
                  py-2
                  mt-2
                  text-base text-gray-500
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-l-4 border-white
                  hover:border-blue-600
                  focus:shadow-outline
                  focus:outline-none
                  focus:ring-2
                  ring-offset-current ring-offset-2
                  hover:text-black
                "
                href="#"
                >Exchanges</a
              >
            </router-link>
          </li>
          <li>
            <a
              class="
                block
                px-4
                py-2
                mt-2
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                border-l-4 border-white
                hover:border-blue-600
                focus:shadow-outline
                focus:outline-none
                focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-black
              "
              href="#"
              >Services</a
            >
          </li>
          <li>
            <a
              class="
                block
                px-4
                py-2
                mt-2
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                border-l-4 border-white
                hover:border-blue-600
                focus:shadow-outline
                focus:outline-none
                focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-black
              "
              href="#"
              >Settings</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "SideNav",
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.nav-height {
  height: calc(100vh - 4rem);
}
</style>
