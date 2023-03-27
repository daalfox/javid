<script setup lang="ts">
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue';
import ControlButton from '@/lib/components/ControlButton.vue';
import { monthNames, weekDaysShort } from '@/lib/constants';
import { jDaysInMonth } from 'jalali-moment';
import { calculateMonthStart } from '@/lib/utils';
import { computed } from 'vue';

const props = defineProps<{
  selectedDate: {
    year: number;
    month: number;
    day: number;
  };
  currentYear: number;
  currentMonth: number;
}>();
defineEmits([
  'openYearMonthView',
  'update:selectedDate',
  'update:currentYear',
  'update:currentMonth'
]);

const occupiedCells = computed(
  () =>
    calculateMonthStart(props.currentYear, props.currentMonth) -
    1 +
    jDaysInMonth(props.currentYear, props.currentMonth - 1)
);
</script>
<template>
  <div class="jdp-flex jdp-items-baseline jdp-justify-between jdp-gap-2">
    <ControlButton
      :icon="IconChevronLeft"
      @click="
        () => {
          if (currentMonth === 1) {
            $emit('update:currentYear', currentYear - 1);
            $emit('update:currentMonth', 12);
          } else {
            $emit('update:currentMonth', currentMonth - 1);
          }
        }
      "
    />
    <ControlButton
      :icon="IconChevronRight"
      @click="
        () => {
          if (currentMonth === 12) {
            $emit('update:currentYear', currentYear + 1);
            $emit('update:currentMonth', 1);
          } else {
            $emit('update:currentMonth', currentMonth + 1);
          }
        }
      "
    />
    <button class="jdp-flex-1 hover:jdp-text-blue-700" @click="$emit('openYearMonthView')">
      {{ currentYear }}
      ,
      {{ monthNames[currentMonth - 1] }}
    </button>
  </div>
  <div class="jdp-mt-2 jdp-grid jdp-grid-cols-7 jdp-gap-1" dir="rtl">
    <span
      class="jdp-flex jdp-h-10 jdp-w-10 jdp-items-center jdp-justify-center jdp-text-neutral-500"
      v-for="weekDay in weekDaysShort"
      :key="weekDay"
      >{{ weekDay }}</span
    >
    <span
      v-for="i in calculateMonthStart(currentYear, currentMonth) - 1"
      :key="i"
      class="jdp-flex jdp-h-10 jdp-w-10 jdp-items-center jdp-justify-center jdp-text-neutral-400"
      >{{
        (currentMonth === 1
          ? jDaysInMonth(currentYear - 1, 11)
          : jDaysInMonth(currentYear, currentMonth - 2)) -
        calculateMonthStart(currentYear, currentMonth) +
        i +
        1
      }}</span
    >
    <span
      v-for="i in jDaysInMonth(currentYear, currentMonth - 1)"
      :key="i"
      class="jdp-flex jdp-h-10 jdp-w-10 jdp-cursor-pointer jdp-items-center jdp-justify-center jdp-rounded-lg"
      :class="{
        'hover:jdp-bg-blue-50 hover:jdp-text-blue-700':
          selectedDate.year !== currentYear ||
          selectedDate.month !== currentMonth ||
          selectedDate.day !== i,
        'jdp-bg-blue-600 jdp-text-white':
          selectedDate.year === currentYear &&
          selectedDate.month === currentMonth &&
          selectedDate.day === i
      }"
      @click="
        () => {
          $emit('update:selectedDate', { year: currentYear, month: currentMonth, day: i });
        }
      "
    >
      {{ i }}
    </span>
    <span
      v-for="i in occupiedCells % 7 === 0 ? 0 : 7 - (occupiedCells % 7)"
      :key="i"
      class="jdp-flex jdp-h-10 jdp-w-10 jdp-items-center jdp-justify-center jdp-text-neutral-400"
      >{{ i }}</span
    >
  </div>
</template>
