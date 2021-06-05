<template>
  <div class="flex-col w-full md:flex md:flex-row md:min-h-screen bg-gray-50">
    <div
      class="flex flex-col flex-shrink-0 text-gray-700 bg-white shadow-xl md:w-64"
    >
      <div
        class="flex flex-row items-center justify-between flex-shrink-0 py-4"
      >
        <a href="/" class="px-8 focus:outline-none">
          <div class="inline-flex items-center">
            <div
              class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"
            ></div>
            <h2
              class="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-500 lg:text-x lg:mr-8"
            >
              wickedblocks
            </h2>
          </div>
        </a>
        <button
          class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              x-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
              style="display: none"
            ></path>
            <path
              x-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav class="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
        <ul>
          <li>
            <router-link to="/dashboard">
              <a
                class="block px-4 py-2 mt-2 text-base text-gray-500 transition duration-500 ease-in-out transform border-l-4 border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
                href="#"
                >Dashboard</a>
            </router-link>
          </li>
          <li>
            <router-link to="/exchanges">
              <a
                class="block px-4 py-2 mt-2 text-base text-gray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
                href="#"
                >Exchanges</a
              >
            </router-link>
          </li>
          <li>
            <a
              class="block px-4 py-2 mt-2 text-base text-gray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
              href="#"
              >Services</a
            >
          </li>
          <li>
            <a
              class="block px-4 py-2 mt-2 text-base text-gray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
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
