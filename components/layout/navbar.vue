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
const application = computed(() => {
  const element = []
  for (let index = 0; index < 30; index++) {
    element.push(
      {
        name: 'app' + index,
        src: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Annie',
      }
    );

  }
  return element;
})
</script>

<template>
  <div 
 
    class="fixed h-20 text-gray-500 dark:text-white border-b dark:border-gray-600 backdrop-blur-md top-0 left-0 right-0 z-30 flex felx-row">
    <div 
    :class="drawer.layout.navbar"
    class="bg-white"
    ></div>
    <div class=" flex-1 h-full flex justify-between px-5 items-center relative">
      <div class="flex flex-row items-center justify-center space-x-1">
        <button @click="toogle" type="button" :class="drawer.layout.button"
          class="items-center justify-center p-1  ms-3 text-sm text-gray-500 rounded-lg  z-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
          </svg>
        </button>
        <div>
          <UBreadcrumb divider="/"
            :links="[{ label: 'Home', to: '/', }, { label: 'Navigation' }, { label: 'Breadcrumb' }]" />
        </div>
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
        <div class="flex space-x-2 justify-center items-center">
          <UPopover >
            <button
              class="  hover:bg-blue-100 ease-in  active:ring-1 active:ring-blue-300 ring-none stroke-teal-50 w-7 h-7 rounded-sm">
              <UIcon name="bx:bxs-category" dynamic />
            </button>
            <template class="right-0" #panel>
                <div class="p-2">
                  <div>
                    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                      <div class="relative">
                        <input type="text" placeholder="Filter app..." 
                        class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400" >
                      </div>
                    </div>
                  </div>
              <NuxtScrollbar tag="aside" @ps-scroll-y="onScroll">

                  <div
                    class="h-80  grid grid-cols-4 gap-5 p-4 ">
                    <div v-for="(app, index) in application"
                      :class="index == 0 ? ' bg-blue-500 text-white' : 'bg-blue-50 text-gray-700'"
                      class="rounded-3xl w-24 h-24  p-1 cursor-pointer ease-out active:bg-blue-500 hover:bg-blue-300" :key="index">
                      <input type="radio" id="job-2" name="job" value="job-2" class="hidden peer">
                      <div class="h-full  flex flex-col text-xs space-y-2 justify-center items-center rounded-lg">
                        <div class="flex justify-center items-center">
                          <img :src="app.src" class="object-cover w-11" alt="">
                        </div>
                        <div class="flex justify-center items-center ">{{ app.name }}</div>
                      </div>
                    </div>
                  </div>
                </NuxtScrollbar>
                </div>
            </template>
          </UPopover>
          <button class="border-4 rounded-full border-blue-300">
            <img class="object-cover w-5" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Annie" />
          </button>
        </div>
  
      </div>
    </div>
  </div>
</template>

<style scoped></style>
