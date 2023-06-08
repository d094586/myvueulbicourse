<script setup lang="ts">
</script>

<template>
    <button class="btn"><slot></slot></button>
</template>

<style>
.btn {
  align-self: flex-end;
  /* margin-top: 15px; */
  padding: 10px 15px;
  background: none;
  color: violet;
  border: 1px solid violet;
}
</style>
