<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
import ControlButton from '@/lib/components/ControlButton.vue'
defineEmits(['openYearMonthView'])

const weekDaysShort = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
</script>
<template>
  <div class="flex items-baseline justify-between gap-2">
    <ControlButton :icon="IconChevronLeft" />
    <ControlButton :icon="IconChevronRight" />
    <button class="flex-1 hover:text-blue-700" @click="$emit('openYearMonthView')">
      1401, اسفند
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
