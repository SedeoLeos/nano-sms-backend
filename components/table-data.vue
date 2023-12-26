<script lang="ts" setup>

export type ColumnProps = {
    key: string;
    label: string,
    sortable?: boolean;
    direction?: "desc" | "asc";
    class?: string;
}
type RowProps = {
    [key: string]: any;
    click?: Function | undefined;
}
export type TableInfo = {
    title: string,
    desc: string;
}

const props = defineProps<{
    columns?: ColumnProps[],
    rows?: RowProps[],
    tableInfo?: TableInfo,
    actionFunction?: Function,
    isSelect: boolean,


}>()
const emits = defineEmits<{
    (e: 'button-clicked'): void
    (e: 'update', value: string): void
}>()
const handleButtonClick = () => {
    // Émettre un événement personnalisé lors du clic sur le bouton
    emits('button-clicked');
};
const selected = ref([props.rows ? [1] : null])
function select(row: any) {
    const index = selected.value.findIndex((item) => item.id === row.id)
    if (index === -1) {
        selected.value.push(row)
    } else {
        selected.value.splice(index, 1)
    }
}
const q = ref('')

const filteredRows = computed(() => {
    if (!q.value) {
        return props.rows;
    }
    console.log(props.rows.values);
    return props.rows.filter((items) => {
        return Object.values(items).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})
const dinamique = (value: string) => {
    return value + '-data'
}
</script>

<template>
    <div class="m-2 space-y-2 rounded-sm border p-5">
        <div class="space-x-5 sm:flex sm:items-center sm:justify-between">
            <div class="flex-[2]">
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800 dark:text-white" v-if="tableInfo?.title">{{ tableInfo.title
                    }}</h2>
                   

                    <span
                        class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{{ rows.length }}</span>
                </div>
                <div>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" v-if="tableInfo?.desc">{{ tableInfo.desc }}</p>
                    
                </div>
            </div>

            <div class="flex-1 flex  justify-center items-center mt-4 gap-x-3">
                <slot>
                                    
                </slot>
            </div>
        </div>
        <div>
            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Filter les element..." />
            </div>
            <UTable :loading="false" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
                v-model="selected" :columns="columns" :rows="filteredRows" @select="select"
                :sort="{ column: 'title', direction: 'desc' }">
                <template v-for="item in  columns " #[dinamique(item.key)]="{ row }">
                    <slot  :name="dinamique(item.key)" :row="row">
                        {{ row[item.key] }}
                    </slot>
                </template>
                <template #actions-data="{ row }">
                    <UDropdown v-if="actionFunction" :items="actionFunction(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                    </UDropdown>
                </template>
            </UTable>
        </div>
    </div>
</template>
<style></style>