<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import ControlButton from '@/lib/components/ControlButton.vue';
import { monthNames, weekDaysShort } from '@/lib/constants';

defineProps<{
  year: number;
  month: number;
  day: number;
}>();
defineEmits(['openYearMonthView', 'update:year', 'update:month', 'update:day']);
</script>
<template>
  <div class="flex items-baseline justify-between gap-2">
    <ControlButton
      :icon="IconChevronLeft"
      @click="
        () => {
          if (month === 1) {
            $emit('update:year', year - 1);
            $emit('update:month', 12);
          } else {
            $emit('update:month', month - 1);
          }
        }
      "
    />
    <ControlButton
      :icon="IconChevronRight"
      @click="
        () => {
          if (month === 12) {
            $emit('update:year', year + 1);
            $emit('update:month', 1);
          } else {
            $emit('update:month', month + 1);
          }
        }
      "
    />
    <button class="flex-1 hover:text-blue-700" @click="$emit('openYearMonthView')">
      {{ year }}
      ,
      {{ monthNames[month - 1] }}
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
