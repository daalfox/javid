<script setup lang="ts">
import { ref } from 'vue';
import DayView from './views/dayView/Main.vue';
import YearMonthView from './views/yearMonthView/Main.vue';

const props = defineProps<{
  modelValue?: string;
}>();

enum View {
  YearMonth,
  Day
}
const view = ref(View.Day);

const day = ref();
const month = ref();
const year = ref();

let date = props.modelValue;
if (!date) {
  date = new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(new Date());
}
let splittedDate = date.split('/');
const tempDate = ref({
  year: parseInt(splittedDate[0]),
  month: parseInt(splittedDate[1]),
  day: parseInt(splittedDate[2])
});
year.value = parseInt(splittedDate[0]);
month.value = parseInt(splittedDate[1]);
day.value = parseInt(splittedDate[2]);
</script>

<template>
  <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div class="pointer-events-auto rounded-lg bg-white p-3 shadow text-sm">
      <DayView
        v-model:tempDate="tempDate"
        v-model:year="year"
        v-model:month="month"
        v-model:day="day"
        v-if="view === View.Day"
        @open-year-month-view="view = View.YearMonth"
      />
      <YearMonthView
        v-model:month="month"
        v-model:year="year"
        v-if="view === View.YearMonth"
        @open-day-view="view = View.Day"
      />
    </div>
  </div>
</template>
