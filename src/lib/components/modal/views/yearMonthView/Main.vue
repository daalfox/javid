<script setup lang="ts">
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
import ControlButton from '@/lib/components/ControlButton.vue'
import { ref } from 'vue'
defineEmits(['openDayView'])

const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]
const currentYear = ref(1401)
</script>
<template>
  <div class="flex justify-between">
    <ControlButton :icon="IconArrowLeft" @click="$emit('openDayView')" />
    <div class="flex items-center gap-2">
      <input
        class="w-20 rounded-lg border border-neutral-200 p-0.5 text-center focus:border-blue-400 focus:outline-none"
        type="number"
        v-model="currentYear"
      />
      <ControlButton :icon="IconChevronLeft" @click="currentYear--" />
      <ControlButton :icon="IconChevronRight" @click="currentYear++" />
    </div>
  </div>
  <div class="mt-2 flex">
    <div class="grid grid-cols-3 grid-rows-4" dir="rtl">
      <div
        v-for="m in months"
        style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        class="flex cursor-pointer items-center justify-center rounded-lg p-3 text-sm hover:bg-blue-50 hover:text-blue-700"
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
