<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from './lib/main';

const date = ref(new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(new Date()));
</script>
<template>
  <div
    class="jdp-min-h-screen jdp-gap-4 jdp-flex jdp-flex-col jdp-items-center jdp-justify-center"
    dir="rtl"
  >
    <DatePicker v-model="date" />
  </div>
</template>

<style lang="postcss">
</style>
