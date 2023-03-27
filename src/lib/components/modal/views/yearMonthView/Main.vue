<script setup lang="ts">
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import ControlButton from '@/lib/components/ControlButton.vue';
import { monthNames } from '@/lib/constants';
import { computed } from 'vue';

const props = defineProps<{
  currentYear: number;
  currentMonth: number;
}>();
const emit = defineEmits(['openDayView', 'update:currentYear', 'update:currentMonth']);

const y = computed({
  get() {
    return props.currentYear;
  },
  set(v) {
    return emit('update:currentYear', v);
  }
});
</script>
<template>
  <div class="jdp-flex jdp-justify-between">
    <ControlButton :icon="IconArrowLeft" @click="$emit('openDayView')" />
    <div class="jdp-flex jdp-gap-2">
      <input
        class="jdp-w-20 jdp-rounded-lg jdp-border jdp-border-neutral-200 jdp-p-0.5 jdp-text-center focus:jdp-border-blue-400 focus:jdp-outline-none"
        type="number"
        v-model="y"
      />
      <ControlButton
        :icon="IconChevronLeft"
        @click="$emit('update:currentYear', currentYear - 1)"
      />
      <ControlButton
        :icon="IconChevronRight"
        @click="$emit('update:currentYear', currentYear + 1)"
      />
    </div>
  </div>
  <div class="jdp-mt-2 jdp-flex">
    <div class="jdp-grid jdp-grid-cols-3 jdp-grid-rows-4 jdp-gap-1" dir="rtl">
      <div
        v-for="(m, i) in monthNames"
        :key="i"
        style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        class="jdp-flex jdp-cursor-pointer jdp-items-center jdp-justify-center jdp-rounded-lg jdp-p-3 jdp-text-sm"
        :class="{
          'hover:jdp-bg-blue-50 hover:jdp-text-blue-700': i + 1 !== currentMonth,
          'jdp-bg-blue-600 jdp-text-white': i + 1 === currentMonth
        }"
        @click="
          $emit('update:currentMonth', i + 1);
          $emit('openDayView');
        "
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
