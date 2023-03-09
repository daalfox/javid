<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'
defineEmits(['openYearMonthView'])
</script>
<template>
  <div class="flex items-baseline gap-2">
    <button class="rounded-lg bg-neutral-50 p-2">
      <IconChevronLeft class="h-4 w-4" />
    </button>
    <button @click="$emit('openYearMonthView')">1401, اسفند</button>
    <button class="rounded-lg bg-neutral-50 p-2">
      <IconChevronRight class="h-4 w-4" />
    </button>
  </div>
</template>
