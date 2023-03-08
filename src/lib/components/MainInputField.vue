<script setup lang="ts">
import { computed } from 'vue'
import { IconCalendarEvent } from '@tabler/icons-vue'

const props = defineProps<{
  modelValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const v = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  }
})
</script>
<template>
  <div class="flex w-44 items-center overflow-hidden rounded-lg shadow">
    <button class="px-3">
      <IconCalendarEvent class="h-4 w-4" />
    </button>
    <input
      type="text"
      v-model="v"
      class="mr-3 w-full py-2 text-center tracking-widest rtl:ml-3 rtl:mr-0"
      disabled
    />
  </div>
</template>
