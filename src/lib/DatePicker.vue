<script setup lang="ts">
import InputField from './components/MainInputField.vue'
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const v = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  }
})
</script>
<template>
  <InputField v-model="v" />
</template>
