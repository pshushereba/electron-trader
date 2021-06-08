<template>
  <section class="text-blueGray-700">
    <div class="container items-center px-5 py-12 lg:px-20">
      <div
        class="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-2/6 md:w-1/2 md:mt-0"
      >
        <div class="relative">
          <label for="email" class="text-base leading-7 text-gray-500"
            >Email</label
          >
          <input
            type="name"
            id="email"
            name="email"
            placeholder="email"
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative mt-4">
          <label for="name" class="text-base leading-7 text-gray-500"
            >Name</label
          >
          <input
            type="name"
            id="name"
            name="name"
            placeholder="name"
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative mt-4">
          <label for="password" class="text-base leading-7 text-gray-500"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="relative mt-4">
          <label for="password" class="text-base leading-7 text-gray-500"
            >Confirm Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          />
        </div>
        <div class="flex my-6">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-2 text-gray-500">Subscribe me </span>
          </label>
        </div>
        <div class="inline-flex flex-wrap items-center justify-between">
          <button
            class="w-full px-4 py-2 my-2 font-medium text-blue-600 transition duration-500 ease-in-out transform bg-blue-100 border-gray-100 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-200 hover:text-blue-900"
          >
            Button
          </button>
          <button
            class="w-full px-4 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
          >
            Button
          </button>
        </div>
        <p class="mx-auto mt-3 text-xs text-gray-500">
          Long caption text under input..
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
