<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconCalendarEvent } from '@tabler/icons-vue';

const props = defineProps<{
  modalVisible: boolean;
  modelValue?: string;
}>();
const emit = defineEmits(['update:modelValue', 'openModal']);

const v = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  }
});

const inputFocused = ref(false);
</script>
<template>
  <div class="flex w-44 items-center overflow-hidden rounded-lg shadow">
    <button
      @click="emit('openModal')"
      class="self-stretch px-3 hover:text-blue-500"
      :class="(modalVisible || inputFocused) && 'text-blue-500'"
    >
      <IconCalendarEvent class="h-4 w-4" />
    </button>
    <input
      type="text"
      v-model="v"
      @focusin="inputFocused = true"
      @focusout="inputFocused = false"
      class="w-full py-2 pr-3 text-center tracking-widest focus:outline-none rtl:pl-3 rtl:pr-0"
      disabled
    />
  </div>
</template>
