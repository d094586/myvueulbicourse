<script setup lang="ts">
import { useRoute} from "vue-router";
import axios from "axios";
import { onMounted } from "vue";
const route = useRoute()

let post = {};

async function fetchPosts() {
  try {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    post = resp.data;
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  fetchPosts()
})
</script>

<template>
<h3>Страница поста с ID = {{$route.params.id}}</h3>
Загружено с сервера
<div>Название поста: {{post.title}}</div>
<div>Название поста: {{post.body}}</div>
</template>

<style>
 
</style>



