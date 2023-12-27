
<script lang="ts" setup>
import { object, ObjectSchema, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { DatePicker as VCalendarDatePicker } from 'v-calendar'

const props = defineProps<{
  title: string;
  isOpen: boolean;
}>();

// Dynamiquement générer un schéma Yup basé sur les champs fournis







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

const dataList = ref<Array<any>>([])
const field = ['United States', 'Canada', 'Mexico']

const country = ref(field[0]) 

const model = ref(null)
</script>

<template>
  <q-dialog :modelValue="isOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">Importer une liste de contact</div>
      </q-card-section>

      <q-separator />
      <q-card-section style="max-height: 50vh" class="scroll">
          <div class="flex p-5 w-[350px] space-y-2">
            <div  class="flex w-full flex-col">
              <span class="flex-1">Selectionner le fichier excel</span>
              <q-file class="flex-1 outline-none" outlined v-model="model">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div class="flex flex-row w-full p-2 bg-gray-50 rounded items-center space-x-5">
              <span class="flex-1">Telephone</span>
              <USelect class="flex-1" v-model="country" :options="field" />
            </div>
            <div class="flex flex-row w-full p-2 bg-gray-50 rounded items-center space-x-5">
              <span class="flex-1">Name</span>
              <USelect class="flex-1" v-model="country" :options="field" />
            </div>
          
          
    
          </div>
         
        </q-card-section>



      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
