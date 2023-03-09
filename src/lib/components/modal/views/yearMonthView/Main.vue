<script setup lang="ts">
defineEmits(['openDayView'])
</script>
<template>
  <button @click="$emit('openDayView')">Year/Month view</button>
</template>
