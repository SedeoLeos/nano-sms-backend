<script setup lang="ts">
import { object, ObjectSchema, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';


const props = defineProps<{
  title: string;
  isOpen: boolean;
  fields: Array<{ label: string; name: string; type: string }>;
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

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup v-for="field in props.fields" :key="field.name" :label="field.label" :name="field.name">
          <UInput v-if="field.type === 'email'" v-model="state[field.name]" />
          <UInput v-else-if="field.type === 'password'" v-model="state[field.name]" type="password" />
          <!-- Ajoutez d'autres types de champs selon vos besoins -->
        </UFormGroup>

        <UButton type="submit">Valider</UButton>
      </UForm>
    </UCard>
  </UModal>
</template>

<style scoped></style>
