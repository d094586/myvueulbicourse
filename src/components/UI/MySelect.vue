<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  options: Array
});
const emit = defineEmits(['update:modelValue']);

function chageOption(event){
    emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select :value="props.modelValue" @change="chageOption">
    <option value=" " disabled>Выберите из списка</option>
    <option :value="option.value" v-for="option in props.options" :key="option.value">{{option.name}}</option>
  </select>
</template>

<style>
</style>
