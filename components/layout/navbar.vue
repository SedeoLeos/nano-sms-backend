<script lang="ts" setup>
const { drawer, toogle } = useDrawer();
const colorMode = useColorMode()
const setTheme = () => {

  if (colorMode.preference == 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'

  }
}
</script>

<template>
  <div :class="drawer.layout.navbar"
    class="fixed h-20 border-b dark:border-gray-600 backdrop-blur-md top-0 right-0 z-30 flex justify-between px-2 items-center">
    <div>
      <button @click="toogle" type="button" :class="drawer.layout.button"
        class="items-center p-1 mt-2 ms-3 text-sm text-gray-500 rounded-lg  z-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
          </path>
        </svg>
      </button>

    </div>

    <div class="flex items-center space-x-3">
      <div class="flex items-center space-x-4">
        <button @click="setTheme()">
          <span class="block dark:hidden">
            <UIcon name="i-bx-bxs-moon" dynamic />
          </span>
          <span class="hidden dark:block">
            <UIcon name="i-bx-bxs-sun" dynamic />
          </span>
        </button>
        <button>
          <UIcon name="i-bx-bell" dynamic />
        </button>
      </div>
      <div class="m-2 w-[1px] h-6 bg-slate-300"></div>
      <div class="flex items-center space-x-2">
        <UIcon name="bx:calendar-alt" dynamic />
        <span class="text-[11px]">Mon, 31 jan 2021 </span>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
