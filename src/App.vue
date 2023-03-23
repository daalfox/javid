<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from './lib/main';

const date = ref(new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(new Date()));
</script>
<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-4" dir="rtl">
    <DatePicker v-model="date" />
  </div>
</template>

<style lang="postcss">
body {
  @apply font-vazirmatn;
}
</style>
