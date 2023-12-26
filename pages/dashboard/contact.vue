<script lang="ts" setup>
import { object, ObjectSchema, string } from 'yup';

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  tel: '222',
  desc: 'lindsay.walton@example.com',
}, {
  id: 2,
  name: 'Courtney Henry',
  tel: '2221238',
  desc: 'courtney.henry@example.com',
}, {
  id: 3,
  name: 'Tom Cook',
  tel: '2227777',
  desc: 'tom.cook@example.com',
}, {
  id: 4,
  name: 'Whitney Francis',
  tel: '22277777',
  desc: 'whitney.francis@example.com',
}, {
  id: 5,
  name: 'Leonard Krasner',
  tel: '22277777',
  desc: 'leonard.krasner@example.com',
}, {
  id: 6,
  name: 'Floyd Miles',
  tel: '22277777',
  desc: 'floyd.miles@example.com',
}]

const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'tel',
  label: 'Telephone',
  sortable: true
}, {
  key: 'desc',
  label: 'Description',
  sortable: true,
  direction: 'desc'
},
]
const page = ref(1)
const pageCount = 5

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
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
const fields = [{ label: 'name', name: 'name', type: 'text' }, { label: 'Message', name: 'message', type: 'textarea' }]
</script>

<template>
  <TableData @button-clicked="onOpenModal" :columns="columns" :rows="people" :action-function="items"
    :table-info="{ title: 'Contact', desc: '' }">
    <template #default>
      <button
        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3098_154395)">
            <path
              d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
              stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_3098_154395">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Import</span>
      </button>
      <button
        class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:text-gray-200 dark:border-gray-700">

        <span>Ajouter un contact</span>
      </button>
    </template>
  </TableData>
  <FormModal :fields="fields" :is-open="open" @close="onClose" title="Configurer un template" />
</template>

<style scoped></style>
