<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <button class="p-2 text-blue-500 hover:text-blue-700">{{ title }}</button>
</template>
