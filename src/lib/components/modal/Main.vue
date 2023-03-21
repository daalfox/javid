<script setup lang="ts">
import { computed } from 'vue';
import Container from './Container.vue';
import Overlay from './Overlay.vue';

const props = defineProps<{
  modelValue?: string;
  modalVisible: boolean;
}>();
const emit = defineEmits(['closeModal', 'update:modelValue']);

const v = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  }
});
</script>
<template>
  <div v-if="modalVisible" class="absolute inset-0">
    <Overlay @click="$emit('closeModal')" />
    <Container v-model="v" />
  </div>
</template>
