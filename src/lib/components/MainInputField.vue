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
  <div class="jdp-flex jdp-w-44 jdp-items-center jdp-overflow-hidden jdp-rounded-lg jdp-shadow">
    <button
      @click="emit('openModal')"
      class="jdp-self-stretch jdp-px-3 hover:jdp-text-blue-500"
      :class="(modalVisible || inputFocused) && 'jdp-text-blue-500'"
    >
      <IconCalendarEvent class="jdp-h-4 jdp-w-4" />
    </button>
    <input
      type="text"
      v-model="v"
      @focusin="inputFocused = true"
      @focusout="inputFocused = false"
      class="jdp-w-full jdp-py-2 jdp-pr-3 jdp-text-center jdp-tracking-widest focus:jdp-outline-none rtl:jdp-pl-3 rtl:jdp-pr-0"
      disabled
    />
  </div>
</template>
