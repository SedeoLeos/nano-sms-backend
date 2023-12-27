<script setup lang="ts">
interface CalendarDay {
  id: string;
  dayIndex: number;
  day: number;
  dayFromEnd: number;
  weekday: number;
  weekdayOrdinal: number;
  weekdayOrdinalFromEnd: number;
  week: number;
  weekFromEnd: number;
  weeknumber: number;
  month: number;
  year: number;
  date: Date;
  position: number;
  label: string;
  ariaLabel: string;
  weekdayPosition: number;
  weekdayPositionFromEnd: number;
  weekPosition: number;
  isoWeeknumber: number;
  startDate: Date;
  noonDate: Date;
  endDate: Date;
  isToday: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  isDisabled: boolean;
  isFocusable: boolean;
  inMonth: boolean;
  inPrevMonth: boolean;
  inNextMonth: boolean;
  onTop: boolean;
  onBottom: boolean;
  onLeft: boolean;
  onRight: boolean;
  classes: Array<string | Object>;
  locale: Locale;
}

import { object, ObjectSchema, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { DatePicker as VCalendarDatePicker } from 'v-calendar'

const props = defineProps<{
  title: string;
  isOpen: boolean;
  fields: Array<{ label: string; name: string; type: string, data?: any }>;
  schema: ObjectSchema<any>;
}>();

// Dynamiquement générer un schéma Yup basé sur les champs fournis





const state = reactive(
  props.fields.reduce((acc, field) => {
    acc[field.name] = undefined;
    return acc;
  }, {} as Record<string, any>)
);

async function onSubmit(event: FormSubmitEvent<any>) {
  // Faire quelque chose avec event.data
  console.log(event.data);
}

const emits = defineEmits<{
  (e: 'close'): void;
}>();

const handleClose = () => {
  emits('close');
};
const date = ref(new Date())

const dataLabel = (date: Date) => {
  const _date = date ?? new Date();
  return _date.toLocaleDateString('en-us', { weekday: 'long', month: 'short', day: 'numeric' })
}


const days = ref([ '2019/02/01', '2019/02/10' ])
const menu = ref(false);
</script>

<template>
  <UModal :model-value="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ title }}
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="handleClose" />
        </div>
      </template>

      <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4 flex  flex-wrap">
        <UFormGroup v-for="field in props.fields" :key="field.name" :label="field.label" :name="field.name"
          class="w-full">
          <UInput v-if="field.type === 'email'" v-model="state[field.name]" :class="'flex-[1]'" />
          <UInput v-if="field.type === 'text'" v-model="state[field.name]" />
          <UInput v-else-if="field.type === 'password'" v-model="state[field.name]" type="password" />
          <UTextarea :rows="10" v-else-if="field.type === 'textarea'" v-model="state[field.name]" autoresize />
          <USelect v-else-if="field.type === 'select'" v-model="state[field.name]" :options="field.data" />
          <UPopover v-else-if="field.type === 'date'" :popper="{ placement: 'bottom-start' }">
            <UButton icon="i-heroicons-calendar-days-20-solid" :label="state[field.name]" >
            </UButton>
            <template #panel="{ close }">
              <!-- <VCalendarDatePicker model="multiple" v-model="state[field.name]" @close="close" /> -->
              <q-date v-model="state[field.name]" multiple />
            </template>
          </UPopover>
          <!-- Ajoutez d'autres types de champs selon vos besoins -->
        </UFormGroup>

        <UButton type="submit">Valider</UButton>
      </UForm>
    </UCard>
  </UModal>
</template>

<style scoped></style>
