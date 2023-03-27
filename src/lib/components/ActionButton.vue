<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <button class="jdp-p-2 jdp-text-blue-500 hover:jdp-text-blue-700">{{ title }}</button>
</template>
