<script setup lang="ts">
import InputField from './components/MainInputField.vue';
import Modal from './components/modal/Main.vue';
import { computed, onMounted, ref } from 'vue';
import { parseDate } from './utils';

const props = defineProps<{
  modelValue?: string;
}>();
const emit = defineEmits(['update:modelValue']);

const v = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  }
});

onMounted(() => {
  if (props.modelValue) {
    let d = parseDate(props.modelValue);
    emit(
      'update:modelValue',
      `${d.year}/${d.month < 10 ? `0${d.month}` : d.month}/${d.day < 10 ? `0${d.day}` : d.day}`
    );
  }
});

const modalVisible = ref(false);
</script>
<template>
  <InputField v-model="v" :modalVisible="modalVisible" @open-modal="modalVisible = true" />
  <Modal v-model="v" :modalVisible="modalVisible" @close-modal="modalVisible = false" dir="ltr" />
</template>

<style lang="postcss" scoped>
:deep(button) {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
