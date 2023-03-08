<script setup lang="ts">
import Container from './Container.vue'
import Overlay from './Overlay.vue'

defineProps<{
  modalVisible: boolean
}>()
defineEmits(['closeModal'])
</script>
<template>
  <div v-if="modalVisible" class="absolute inset-0">
    <Overlay @click="$emit('closeModal')" />
    <Container />
  </div>
</template>
