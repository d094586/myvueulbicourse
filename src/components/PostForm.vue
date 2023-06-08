<script setup lang="ts">
import { reactive } from "vue";
const statePost = reactive({id: 0, title: '', body: ''});
const emit = defineEmits(['createPost']);

function createPost(){
  statePost.id = Date.now();
  emit('createPost', {...statePost})  
  statePost.title = '';
  statePost.body = '';
}


</script>

<template>
    <form @submit.prevent>
      <my-input v-model="statePost.title" class="input" type="text" placeholder="Название" />
      <my-input v-model="statePost.body" class="input" type="text" placeholder="Описание" />
      <my-button class="btn" @click="createPost">Создать</my-button>
    </form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
}




</style>
