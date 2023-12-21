<script lang="ts" setup>
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
    key: 'email',
    label: 'Email',
    sortable: true,
    direction: 'desc'
}, {
    key: 'role',
    label: 'Role'
},{
  key: 'actions'
}]
</script>
<template>
 <TableDat  :columns="columns"/>
</template>

<style scoped></style>
