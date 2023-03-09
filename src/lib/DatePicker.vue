<script setup lang="ts">
import InputField from './components/MainInputField.vue'
import Modal from './components/modal/Main.vue'
import { computed, ref } from 'vue'

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

const modalVisible = ref(true)
</script>
<template>
  <InputField v-model="v" :modalVisible="modalVisible" @open-modal="modalVisible = true" />
  <Modal :modalVisible="modalVisible" @close-modal="modalVisible = false" dir="ltr" />
</template>

<style lang="postcss" scoped>
:deep(button) {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
