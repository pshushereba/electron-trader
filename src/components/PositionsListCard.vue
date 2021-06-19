<template>
  <div class="container flex justify-center">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-2/3
        mb-6
        shadow-lg
        rounded
      "
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              Current Positions
            </h3>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          >
            <button
              class="
                bg-indigo-500
                text-white
                active:bg-indigo-600
                text-xs
                font-bold
                uppercase
                px-3
                py-1
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="
                  px-6
                  bg-blueGray-50
                  text-blueGray-500
                  align-middle
                  border border-solid border-blueGray-100
                  py-3
                  text-xs
                  uppercase
                  border-l-0 border-r-0
                  whitespace-nowrap
                  font-semibold
                  text-left
                "
              >
                Symbol
              </th>
              <th
                class="
                  px-6
                  bg-blueGray-50
                  text-blueGray-500
                  align-middle
                  border border-solid border-blueGray-100
                  py-3
                  text-xs
                  uppercase
                  border-l-0 border-r-0
                  whitespace-nowrap
                  font-semibold
                  text-left
                "
              >
                Quantity
              </th>
              <th
                class="
                  px-6
                  bg-blueGray-50
                  text-blueGray-500
                  align-middle
                  border border-solid border-blueGray-100
                  py-3
                  text-xs
                  uppercase
                  border-l-0 border-r-0
                  whitespace-nowrap
                  font-semibold
                  text-left
                "
              >
                Price
              </th>
              <th
                class="
                  px-6
                  bg-blueGray-50
                  text-blueGray-500
                  align-middle
                  border border-solid border-blueGray-100
                  py-3
                  text-xs
                  uppercase
                  border-l-0 border-r-0
                  whitespace-nowrap
                  font-semibold
                  text-left
                "
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                XOM
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                495
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                340
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <i class="fas fa-arrow-up text-emerald-500 mr-4"></i> -->
                46,73%
              </td>
            </tr>
            <tr>
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                TSLA
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                385
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                312
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <i class="fas fa-arrow-down text-orange-500 mr-4"></i> -->
                16,53%
              </td>
            </tr>
            <tr>
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                AAPL
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                313
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                294
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <i class="fas fa-arrow-down text-orange-500 mr-4"></i> -->
                36,29%
              </td>
            </tr>
            <tr>
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                GE
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                250
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                142
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <i class="fas fa-arrow-up text-emerald-500 mr-4"></i> -->
                53,87%
              </td>
            </tr>
            <tr>
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                F
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                179
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                110
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <i class="fas fa-arrow-down text-red-500 mr-4"></i> -->
                46,23%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
