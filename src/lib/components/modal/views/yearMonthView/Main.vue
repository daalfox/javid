<script setup lang="ts">
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
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
    <button
      @click="$emit('openDayView')"
      class="rounded-lg bg-neutral-50 p-1 hover:bg-blue-50 hover:text-blue-700"
    >
      <IconArrowLeft class="stroke-1" />
    </button>
    <div class="flex items-center gap-2">
      <input
        class="w-20 rounded-lg border border-neutral-200 p-0.5 text-center focus:border-blue-400 focus:outline-none"
        type="number"
        v-model="currentYear"
      />
      <button
        @click="currentYear--"
        class="rounded-lg bg-neutral-50 p-2 hover:bg-blue-50 hover:text-blue-700"
      >
        <IconChevronLeft class="h-4 w-4" />
      </button>
      <button
        @click="currentYear++"
        class="rounded-lg bg-neutral-50 p-2 hover:bg-blue-50 hover:text-blue-700"
      >
        <IconChevronRight class="h-4 w-4" />
      </button>
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
