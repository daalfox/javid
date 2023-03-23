<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import ControlButton from '@/lib/components/ControlButton.vue';
import { monthNames, weekDaysShort } from '@/lib/constants';
import { jDaysInMonth } from 'jalali-moment';
import { calculateMonthStart } from '@/lib/utils';
import { computed } from 'vue';

const props = defineProps<{
  tempDate: {
    year: number;
    month: number;
    day: number;
  };
  year: number;
  month: number;
  day: number;
}>();
defineEmits(['openYearMonthView', 'update:tempDate', 'update:year', 'update:month', 'update:day']);

const occupiedCells = computed(
  () => calculateMonthStart(props.year, props.month) - 1 + jDaysInMonth(props.year, props.month - 1)
);
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
      :key="weekDay"
      >{{ weekDay }}</span
    >
    <span
      v-for="i in calculateMonthStart(year, month) - 1"
      :key="i"
      class="flex h-10 w-10 items-center justify-center text-neutral-400"
      >{{
        (month === 1 ? jDaysInMonth(year - 1, 11) : jDaysInMonth(year, month - 2)) -
        calculateMonthStart(year, month) +
        i +
        1
      }}</span
    >
    <span
      v-for="i in jDaysInMonth(year, month - 1)"
      :key="i"
      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg"
      :class="{
        'hover:bg-blue-50 hover:text-blue-700':
          tempDate.year !== year || tempDate.month !== month || tempDate.day !== i,
        'bg-blue-600 text-white':
          tempDate.year === year && tempDate.month === month && tempDate.day === i
      }"
      @click="
        () => {
          $emit('update:day', i);
          $emit('update:tempDate', { year, month, day: i });
        }
      "
    >
      {{ i }}
    </span>
    <span
      v-for="i in occupiedCells % 7 === 0 ? 0 : 7 - (occupiedCells % 7)"
      :key="i"
      class="flex h-10 w-10 items-center justify-center text-neutral-400"
      >{{ i }}</span
    >
  </div>
</template>
