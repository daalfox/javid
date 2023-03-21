<script setup lang="ts">
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import ControlButton from '@/lib/components/ControlButton.vue';
import { monthNames } from '@/lib/constants';
import { computed } from 'vue';

const props = defineProps<{
  year: number;
  month: number;
}>();
const emit = defineEmits(['openDayView', 'update:year', 'update:month']);

const y = computed({
  get() {
    return props.year;
  },
  set(v) {
    return emit('update:year', v);
  }
});
</script>
<template>
  <div class="flex justify-between">
    <ControlButton :icon="IconArrowLeft" @click="$emit('openDayView')" />
    <div class="flex items-center gap-2">
      <input
        class="w-20 rounded-lg border border-neutral-200 p-0.5 text-center focus:border-blue-400 focus:outline-none"
        type="number"
        v-model="y"
      />
      <ControlButton :icon="IconChevronLeft" @click="$emit('update:year', year - 1)" />
      <ControlButton :icon="IconChevronRight" @click="$emit('update:year', year + 1)" />
    </div>
  </div>
  <div class="mt-2 flex">
    <div class="grid grid-cols-3 grid-rows-4 gap-1" dir="rtl">
      <div
        v-for="(m, i) in monthNames"
        style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        class="flex cursor-pointer items-center justify-center rounded-lg p-3 text-sm"
        :class="{
          'hover:bg-blue-50 hover:text-blue-700': i + 1 !== month,
          'bg-blue-600 text-white': i + 1 === month
        }"
        @click="$emit('update:month', i + 1)"
      >
        {{ m }}
      </div>
    </div>
  </div>
</template>
<style scoped>
input[type='number'] {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
