<script setup lang="ts">
import { ref } from 'vue';
import { parseDate } from '@/lib/utils';
import DayView from './views/dayView/Main.vue';
import YearMonthView from './views/yearMonthView/Main.vue';
import ActionButton from '@/lib/components/ActionButton.vue';

const props = defineProps<{
  modelValue?: string;
}>();
defineEmits(['update:modelValue', 'closeModal']);

enum View {
  YearMonth,
  Day
}
const view = ref(View.Day);

let date = ref(props.modelValue);
if (!date.value) {
  date.value = new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(new Date());
}
const selectedDate = ref(parseDate(date.value));

const currentYear = ref(parseDate(date.value).year);
const currentMonth = ref(parseDate(date.value).month);
</script>

<template>
  <div
    class="jdp-pointer-events-none jdp-absolute jdp-inset-0 jdp-flex jdp-items-center jdp-justify-center jdp-text-sm"
  >
    <div class="jdp-pointer-events-auto jdp-rounded-lg jdp-bg-white jdp-p-3 jdp-shadow">
      <DayView
        v-model:selectedDate="selectedDate"
        v-model:currentYear="currentYear"
        v-model:currentMonth="currentMonth"
        v-if="view === View.Day"
        @open-year-month-view="view = View.YearMonth"
      />
      <YearMonthView
        v-model:currentYear="currentYear"
        v-model:currentMonth="currentMonth"
        v-if="view === View.YearMonth"
        @open-day-view="view = View.Day"
      />
      <div class="jdp-flex jdp-gap-2" dir="rtl">
        <ActionButton
          title="تایید"
          @click="
            $emit(
              'update:modelValue',
              `${selectedDate.year}/${
                selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month
              }/${selectedDate.day < 10 ? `0${selectedDate.day}` : selectedDate.day}`
            );
            $emit('closeModal');
          "
        />
        <ActionButton title="انصراف" @click="$emit('closeModal')" />
      </div>
    </div>
  </div>
</template>
