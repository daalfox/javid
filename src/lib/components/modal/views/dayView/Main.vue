<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
defineEmits(['openYearMonthView'])

const weekDaysShort = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
</script>
<template>
  <div class="flex items-baseline justify-between gap-2">
    <button class="rounded-lg bg-neutral-50 p-2 hover:bg-blue-50 hover:text-blue-700">
      <IconChevronLeft class="h-4 w-4" />
    </button>
    <button class="flex-1 hover:text-blue-700" @click="$emit('openYearMonthView')">
      1401, اسفند
    </button>
    <button class="rounded-lg bg-neutral-50 p-2 hover:bg-blue-50 hover:text-blue-700">
      <IconChevronRight class="h-4 w-4" />
    </button>
  </div>
  <div class="mt-2 grid grid-cols-7 gap-1" dir="rtl">
    <span
      class="flex h-10 w-10 items-center justify-center text-neutral-500"
      v-for="weekDay in weekDaysShort"
      >{{ weekDay }}</span
    >
  </div>
</template>
