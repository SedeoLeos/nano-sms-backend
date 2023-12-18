<script lang="ts" setup>

const links = [
   {
      icon: 'dashicons:admin-home',
      color: 'text-amber-500',
      name: 'Dashboard',
      to: '/dashboard'

   },
   {
      icon: 'dashicons:lock-duplicate',
      name: 'Planification SMS',
      color: 'text-blue-500',
      to: '/dashboard/token'
   },
   {
      icon: 'dashicons:rest-api',
      name: 'Mes transaction',
      color: 'text-sky-500',
      to: '/dashboard/app'

   },
   {
      icon: 'dashicons:rest-api',
      name: 'Gérer les applications',
      color: 'text-red-500',
      to: '/dashboard/app'
   },
   {
      icon: 'dashicons:rest-api',
      name: 'Mes Contact',
      color: 'text-indigo-500',
      to: '/dashboard/app'
   },
   {
      icon: 'dashicons:rest-api',
      name: 'Template',
      color: 'text-violet-500',
      to: '/dashboard/app'
   },
   {
      icon: 'dashicons:admin-generic',
      name: 'Settings',
      color: 'text-fuchsia-500',
      to: '/dashboard/settings'
   }
]
const drawer = useState<any>('drawer:state')
const { toogle } = useDrawer();

</script>

<template>
   <aside :class="drawer.layout.sidbar"
      class="fixed top-0 flex flex-col left-0 z-40 w-72 h-screen bg-slate-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex  h-20 items-center  space-x-5 justify-center">
         <div class="bg-blue-500 p-1 rounded-lg">
            <UIcon class="text-white text-[25px]" name="bx:bxs-message-square-dots" dynamic />
         </div>
         <div>
            <span class="font-bold italic">
               Nano
            </span>
            <span class="font-bold italic text-blue-500">
               SMS
            </span>
         </div>
      </div>
      <button @click="toogle"
         class="absolute top-6 -right-3 flex items-center justify-center bg-white hover:text-white active:ring-2 active:ring-gray-500 hover:bg-zinc-400 p-1 hover:shadow-slate-700 rounded-full shadow-lg">
         <UIcon class="text-[20px]" name="bx:chevron-left" dynamic />
      </button>
      <div class="flex-1   text-[11px] flex flex-col justify-between p-5 overflow-y-auto text-zinc-700 dark:text-white">
         <div class="flex-1">
            <ul class="space-y-2 flex flex-col">
               <li v-for="item in links">
                  <NuxtLink :to="item.to"
                     class="group/nuxtlink flex items-center space-x-5 ease-in duration-300   hover:text-blue-600  hover:bg-blue-100 hover:rounded-md p-2">
                     <div class="rounded-sm flex items-center justify-center p-1">
                        <UIcon class="text-sm" :class="item.color" :name="item.icon" dynamic />
                     </div>
                     <span class="ms-3">{{ item.name }}</span>
                  </NuxtLink>
               </li>
            </ul>
         </div>
         <div class="flex justify-end flex-col ">
            <Button class="flex items-center space-x-5 mx-4 text-blue-600 bg-blue-100 rounded-full p-2">
               <div class="border-4 rounded-full border-blue-300">
                  <img class="object-cover w-5" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Annie" />
               </div>
               <span class="ms-3">Nanocreatives</span>
            </Button>
            <NuxtLink to="" class="flex items-center space-x-5 m-4 text-white bg-blue-500  rounded-lg p-2">
               <UIcon class="text-[25px]" name="bx:bxs-log-out-circle" dynamic />
               <span class="ms-3">Logout</span>
            </NuxtLink>
         </div>
      </div>

   </aside>
</template>
<style scoped></style>

