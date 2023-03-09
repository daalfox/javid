<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from './lib/main'

const date = ref('1401-11-16')
</script>
<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4" dir="rtl">
    <p>date: {{ date || 'not selected' }}</p>
    <DatePicker v-model="date" />
  </div>
</template>

<style lang="postcss">
body {
  @apply font-vazirmatn;
}
</style>
