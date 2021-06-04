<template>
  <div class="container mx-auto">
    <section class="text-blueGray-700">
      <div class="container items-center px-5 py-12 lg:px-20">
        <div
          class="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-2/6 md:w-1/2 md:mt-0"
        >
          <form class="login" @submit.prevent="login">
            <div class="relative mt-4">
              <label for="name" class="text-base leading-7 text-gray-500"
                >Username</label
              >
              <input
                required
                type="name"
                v-model="username"
                id="name"
                name="name"
                placeholder="Username"
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <div class="relative mt-4">
              <label for="name" class="text-base leading-7 text-gray-500"
                >Password</label
              >
              <input
                required
                type="password"
                v-model="password"
                id="password"
                name="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
              />
            </div>
            <div class="flex my-6">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2 text-gray-500">Remember me </span>
              </label>
            </div>
            <button
              type="submit"
              class="w-full px-16 py-2 my-2 mr-2 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
            >
              Login
            </button>
            <p class="mx-auto mt-3 text-xs text-gray-500">
              Long caption text under input..
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
