<script lang="ts" setup>

const links = [
   {
      icon: 'dashicons:admin-home',
      name: 'Dashboard',
      sub: '',
      to: '/dashboard'

   },
   {
      icon: 'dashicons:lock-duplicate',
      name: 'Tokens',
      sub: '3',
      to: '/dashboard/tokens'
   },
   {
      icon: 'dashicons:admin-users',
      name: 'Users',
      sub: '',
      to: '/dashboard/user'
   },
   {
      icon: 'dashicons:rest-api',
      name: 'Application',
      sub: '',
      to: '/dashboard/app'
   },
   {
      icon: 'dashicons:admin-generic',
      name: 'Settings',
      sub: '',
      to: '/dashboard/app'
   }
]
const drawer = useState('drawed',()=>true)
function handledrawer () {
   drawer.value = ! drawer.value
}
</script>

<template>
   <aside
   :class="drawer?'fixed':'hidden'"
      class="fixed top-0 flex flex-col left-0 z-40 w-72 h-screen transition-transform -translate-x-full  bg-alfa sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex  h-20 items-center  space-x-5 justify-center">
         <div class="bg-slate-900 p-1 rounded-lg">
            <UIcon class="text-white text-[25px]" name="bx:bxs-message-square-dots" dynamic />
         </div>
         <span class="font-bold italic">
            Nano SMS
         </span>
      </div>
      <button
      @click="handledrawer"
         class="absolute top-6 -right-3 flex items-center justify-center bg-white hover:text-white active:ring-2 active:ring-gray-500 hover:bg-zinc-400 p-1 hover:shadow-slate-700 rounded-full shadow-lg">
         <UIcon class="text-[20px]" name="bx:chevron-left" dynamic />
      </button>
      <div class="flex-1   text-[11px] flex flex-col justify-between p-5 overflow-y-auto">
         <div class="flex-1">
            <ul class="space-y-2 flex flex-col">
               <li v-for="item in links">
                  <NuxtLink :to="item.to"
                     class="flex items-center space-x-5  hover:shadow-lg text-zinc-400 hover:text-zinc-500 dark:text-white hover:bg-zinc-400  hover:rounded-md p-2">
                     <UIcon class="text-xl hover:text-zinc-400" :name="item.icon" dynamic />
                     <span class="ms-3">{{ item.name }}</span>
                  </NuxtLink>
               </li>
            </ul>
         </div>
         <div class="flex justify-end flex-col ">
           
                  <NuxtLink to=""
                     class="flex items-center space-x-5 m-4 text-zinc-500 dark:text-white bg-zinc-400  rounded-md p-2">
                     <UIcon class="text-xl" name="bx:bxs-log-out-circle" dynamic />
                     <span class="ms-3">Logout</span>
                  </NuxtLink>
         </div>
      </div>
      
   </aside>
</template>
<style scoped></style>

