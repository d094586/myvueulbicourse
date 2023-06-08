<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])

function updateInput(event){
  emit('update:modelValue', event.target.value);
}

</script>

<template>
    <input class="input" :value="modelValue" @input="updateInput" type="text">
</template>

<style>
.input {
  width: 100%;
  border: 1px solid violet;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
