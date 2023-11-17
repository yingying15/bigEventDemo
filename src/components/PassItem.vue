<script setup>
defineProps({
  modelValue: {
    type: [Number, String]
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="password"
    @update:modelValue="emit('update:modelValue', $event)"
    :modelValue="modelValue"
  />
</template>
<style scoped lang="scss">
input {
  font-size: 1.5rem;
  text-align: center;
}
</style>
