<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  icon: Component;
}>();
</script>
<template>
  <button
    class="jdp-rounded-lg jdp-bg-neutral-100 jdp-p-2 hover:jdp-bg-blue-100 hover:jdp-text-blue-700"
  >
    <component :is="icon" class="jdp-h-4 jdp-w-4" />
  </button>
</template>
