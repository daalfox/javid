<script setup lang="ts">
import { ref } from 'vue';
import { DatePicker } from './lib/main';

const date = ref(
  new Intl.DateTimeFormat('fa-IR-u-nu-latn').format(new Date()).split('/').join('-')
);
</script>
<template>
  <div
    class="jdp-flex jdp-min-h-screen jdp-flex-col jdp-items-center jdp-justify-center jdp-gap-4"
    dir="rtl"
  >
    <DatePicker v-model="date" seperator="-" />
  </div>
</template>

<style lang="postcss">
body {
  @apply jdp-font-vazirmatn;
}
</style>
