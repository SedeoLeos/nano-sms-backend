<script lang="ts" setup>
import { object, ObjectSchema, string } from 'yup';

const people = [{
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    desc: 'lindsay.walton@example.com',
}, {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    desc: 'courtney.henry@example.com',
}, {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    desc: 'tom.cook@example.com',
}, {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    desc: 'whitney.francis@example.com',
}, {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    desc: 'leonard.krasner@example.com',
}, {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
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
    key: 'title',
    label: 'Title',
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
const open= ref(false)
const  onOpenModal = ()=>{
   
    open.value = true;
}
const  onClose = ()=>{
    open.value = false;
}
const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})
const fields = [{label:'name', name:'name',type:'text'},{label:'Message', name:'message',type:'textarea'}]
</script>

<template>
  <TableData  @button-clicked="onOpenModal" :columns="columns" :rows="people" :action-function="items" :table-info="{title:'Configurer un template sms', desc:'Optimisez votre efficacité en générant des modèles de SMS personnalisés que vous pourrez réutiliser à tout moment. Simplifiez vos communications en créant des templates SMS adaptés à vos besoins spécifiques, et gagnez du temps tout en garantissant la cohérence de vos messages.'}" />
  <FormModal :fields="fields" :is-open="open" @close="onClose" title="Configurer un template"/>
</template>

<style scoped></style>
