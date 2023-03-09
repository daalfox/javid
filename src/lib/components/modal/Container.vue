<script setup lang="ts">
import { ref } from 'vue'
import DayView from './views/dayView/Main.vue'
import YearMonthView from './views/yearMonthView/Main.vue'

enum View {
  YearMonth,
  Day
}
const view = ref(View.Day)
</script>

<template>
  <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div class="pointer-events-auto rounded-lg bg-white p-3 shadow">
      <DayView v-if="view === View.Day" @open-year-month-view="view = View.YearMonth" />
      <YearMonthView v-if="view === View.YearMonth" @open-day-view="view = View.Day" />
    </div>
  </div>
</template>
