<script lang="ts" setup>
import type { ColumnProps, TableInfo } from '~/components/table-data.vue';
import { object, ObjectSchema, string } from 'yup';


const columns: ColumnProps[] = [{
  key: 'id',
  label: 'ID',
  sortable: false
}, {
  key: 'name',
  label: 'Sms Plannifier',
  sortable: true
}, {
  key: 'template',
  label: 'Template',
  sortable: true
}, {
  key: 'recurence',
  label: 'Recurence',
  sortable: true
}, {
  key: 'actions',
  label: 'Actions'
}]
const sms_plannifier = [{
  id: 1,
  name: 'Bonne année',
  recurence:{
    type:'Annuelle',
    date_run:'',
    every:1
  },
  template:{
    id:1,
    name:'Message de fëte',
    message:'Bonne année á vous #contact.name ainsi nous vous avons fais cadeau de 10000 xaf au #contact.telephone'
  },
  update_at: new Date(),
  team: 'Nano creatives',
  
}, {
  id: 2,
  name: 'Fin de congé',
  recurence:{
    type:'Days',
    date_run:new Date(),
    every:1,
    end_date:new Date(),
  },
  template:{
    id:1,
    name:'Message de fin de congé',
    message:`J'espère que ce message vous trouve bien. Je tiens à vous informer que votre période de congé préalablement approuvée arrive à sa fin. pour la date  #config.date_end`
  },
  update_at: new Date(),
  create_at: new Date(),
  team: 'Soa cash',
  
},]
const items = (row:any) => [
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
  title: 'Plannifier vos sms',
  desc: ''
}
const open = ref(false)
const onOpenModal = () => {
    open.value = true;
}
const onClose = () => {
    open.value = false;
}
const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required')
})
const fields = [
  { label: 'name', name: 'name', type: 'text' }, 
  { label: 'Reccurence', 
    name: 'reccurence', 
    type: 'select',
    data: ['Tous les deux Jour','Tous les Jour','Tous les Mois','Tous les Ans'] },
  {

    label: 'Template',
    name: 'template', 
    type: 'select',
    data: ['Template 1','Template 1','Template 1','Template 1'],

  },{

label: 'Date',
name: 'date', 
type: 'date',

},
  ]

</script>
<template>
  <TableData :table-info="tabe_info" :columns="columns" :is-select="true" :rows="sms_plannifier" :action-function="items">
    <button @click="onOpenModal"
      class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Crée une nouvelle Plannifier </span>
    </button>
    <template #name-data="{row}">
      <UBadge size="xs"  color="emerald" variant="subtle" >
          {{ row.name }}
        </UBadge>
    </template>
    <template #create_at-data="{row}">
      <UBadge size="xs" :label="new Date(row.create_at).toLocaleString() " color="blue" variant="subtle" />
    </template>
    <template #recurence-data="{row}">
      <UBadge size="xs" :label="row.recurence.type" color="blue" variant="soft" />
    </template>
    <template #template-data="{row}">
      <UBadge size="xs" :label="row.template.name" color="blue" variant="subtle" />
    </template>
    <template #actions-data="{ row }">
                    <UDropdown  :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
    </template>
    
  </TableData>
  <FormModal :fields="fields" :is-open="open" @close="onClose" title="Configurer un template" />
</template>

<style scoped></style>
