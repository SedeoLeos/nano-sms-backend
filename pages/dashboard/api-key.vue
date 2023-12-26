<script lang="ts" setup>
import type { ColumnProps, TableInfo } from '~/components/table-data.vue';

const columns: ColumnProps[] = [{
  key: 'id',
  label: 'ID',
  sortable: false
}, {
  key: 'name',
  label: 'Applications',
  sortable: true
}, {
  key: 'create_at',
  label: 'create At',
  sortable: true
}, {
  key: 'update_at',
  label: 'update At',
  sortable: true
}, {
  key: 'team',
  label: 'Team',
  sortable: true
},{
  key: 'actions',
  label: 'Actions'
}]
const people = [{
  id: 1,
  name: 'Nano auth',
  create_at: new Date(),
  update_at: new Date(),
  team: 'Nano creatives',
  
}, {
  id: 2,
  name: 'Nano builder',
  create_at: new Date(),
  update_at: new Date(),
  team: 'Nano creatives',
}, {
  id: 3,
  name: 'Zoa cash',
  create_at: new Date(),
  update_at: new Date(),
  team: 'Nano creatives',
}]
const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
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
const tabe_info: TableInfo = {
  title: 'API Key',
  desc: ''
}
</script>
<template>
  <TableData :table-info="tabe_info" :columns="columns" :is-select="true" :rows="people" :action-function="items">
    <button
      class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Ajouté une nouvelle application</span>
    </button>
    <template #name-data="{row}">
      <!-- <UBadge size="xs"  color="emerald" variant="subtle" > -->
        <div class="flex">
          <img class="w-11" src="https://api.dicebear.com/7.x/adventurer/svg?seed=Annie"/>
          <div class="flex flex-col">
            <span> {{ row.name }}</span>
            <span class="text-sm"> {{ row.team }}</span>
          </div>

        </div>
        <!-- </UBadge> -->
    </template>
    <template #create_at-data="{row}">
      <UBadge size="xs" :label="new Date(row.create_at).toLocaleString() " color="blue" variant="subtle" />
    </template>
    <template #update_at-data="{row}">
      <UBadge size="xs" :label="new Date(row.update_at).toLocaleString() " color="blue" variant="soft" />
    </template>
    <template #team-data="{row}">
      <UBadge size="xs" :label="new Date(row.update_at).toLocaleString() " color="blue" variant="subtle" />
    </template>
    <template #actions-data="{ row }">
                    <UDropdown  :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
    </template>
    <!-- <template #name-data="{ row }">
        <UButton
          v-if="!row.completed"
          icon="i-heroicons-check"
          size="2xs"
          color="emerald"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          square
        />
      </template> -->
  </TableData>
</template>

<style scoped></style>
