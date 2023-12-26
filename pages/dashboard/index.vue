<script lang="ts" setup>

const items = (
  
) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]
</script>

<template>
  <div class="flex flex-row space-x-2 space-y-2">
    <div class="flex flex-col overflow-hidden  border border-blue-100  w-48 h-48 rounded-lg">
      <div class="flex-1 p-2 flex flex-row justify-between">
        <div class="w-12 h-12 border rounded-lg p-2">
          <img class="object-cover" src="https://api.dicebear.com/7.x/shapes/svg" alt="">
        </div>
        <div class="">
          <UDropdown  :items="items()">
               <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </div>
      </div>
      <div class="flex-[3]">

      </div>
      <div class="flex-1">
        <div class="bg-blue-50 hover:bg-blue-100 cursor-pointer  text-[12px] font-semibold flex items-center justify-center p-1 m-5 rounded">
          Allez 
        </div>
      </div>

    </div>
   
  </div>
</template>

<style scoped></style>
