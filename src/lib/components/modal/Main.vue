<script setup lang="ts">
import { computed } from 'vue';
import Container from './Container.vue';
import Overlay from './Overlay.vue';

const props = defineProps<{
  modelValue?: string;
  modalVisible: boolean;
  seperator: string;
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
  <div v-if="modalVisible" class="jdp-absolute jdp-inset-0">
    <Overlay @click="$emit('closeModal')" />
    <Container v-model="v" :seperator="seperator" @close-modal="$emit('closeModal')" />
  </div>
</template>
