<script setup lang="ts">
import { reactive } from "vue";
const props = defineProps(["post"]);
</script>

<template>
  <div class="post">
    <div>
      <div>ID: {{ props.post.id }}</div>
      <div>Название: {{ props.post.title }}</div>
      <div>Описание: {{ props.post.body }}</div>
    </div>
    <div class="post__btns">
        <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
        <my-button @click="$emit('remove', props.post)">Удалить</my-button>
    </div>
  </div>
</template>

<style>
.post__btns{
  display: flex;
}
</style>
