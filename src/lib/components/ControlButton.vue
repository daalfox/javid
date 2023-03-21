<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  icon: Component;
}>();
</script>
<template>
  <button class="rounded-lg bg-neutral-100 p-2 hover:bg-blue-50 hover:text-blue-700">
    <component :is="icon" class="h-4 w-4" />
  </button>
</template>
