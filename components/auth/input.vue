<script lang="ts" setup>
defineProps<{
  type?: 'email' | 'password' | 'text',
  placeholder?: string,
  modelValue?: any,
  error?: any
}>()
const emit = defineEmits<{
  (e: 'update:modelValue'): void,
  (e: 'validate'): void,
}>();

const validate = () => {
  emit('validate')
}
const handleInput = (value: any) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div>
    <input :value="modelValue" @input="handleInput($event.target.value)" @keypress="validate" @blur="validate"
      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
      :type="type" :placeholder="placeholder" />
    <span v-if="!!error" class="text-red-500">{{ error }}</span>
  </div>
</template>

<style scoped></style>
