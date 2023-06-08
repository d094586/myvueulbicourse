<script setup lang="ts">
import PostItem from './PostItem.vue';
const props = defineProps(['posts'])
console.log(props);


</script>

<template>
  <div v-if="props.posts.length > 0">
    <h3>Список постов</h3>
    <post-item 
    v-for="post in posts" 
    :post="post" 
    key="post.id"
    @remove="$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h2>Список постов пуст</h2>
  </div>
</template>

<style>
.post {
  padding: 15px;
  border: 2px solid violet;
  margin-top: 15px;
}
</style>
