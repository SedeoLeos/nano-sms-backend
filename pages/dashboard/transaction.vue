<script lang="ts" setup>
import { object, ObjectSchema, string } from 'yup';

const people = [{
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    message: 'whitney.francis@example.com',
}, {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    message: 'whitney.francis@example.com',

}, {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    message: 'whitney.francis@example.com',
}, {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    message: 'whitney.francis@example.com',
}, {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    message: 'leonard.krasner@example.com',
}, {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    message: 'floyd.miles@example.com',
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
    key: 'message',
    label: 'Message',
    sortable: true,
    direction: 'desc'
},
]
const table_info = { title: 'Vos transaction'};
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

</script>

<template>
    <TableData :columns="columns" :rows="people" :action-function="items"
        :table-info="table_info">
    </TableData>
   
</template>

<style scoped></style>

