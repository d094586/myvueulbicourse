<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { reactive, computed, onMounted, watch, ref } from "vue";
import { useStore } from 'vuex'
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

const store = useStore();
console.log(store.getters.doubleLikes);

onMounted(() => {
  fetchPosts();
});

// const searched = watch(searchQuery, (searchQueryt)=>{
//   console.log(searchQueryt);

// })

function create(post) {
  state.posts.push(post);
  state.dialogVisible = false;
}

function remove(post) {
  state.posts = state.posts.filter((p) => {
    return p !== post;
  });
}

function showDialog() {
  state.dialogVisible = true;
}


function changePage(pageNumber) {
  state.page = pageNumber;
}

// watch(
//   () => state.page,
//   (newValue, oldValue) => {
//     console.log(newValue);
//   },
//   // { deep: true }
// );

// watch(()=> state.page, (newValue) => {
//   console.log(state.page)
// })
watch(
  () => state.page,
  () => {
    fetchPosts();
  }
);

////:posts="[...state.posts]" in list!!!
</script>

<template>
  <div>
    <h1>Главная страница</h1>
    {{store.state.likes}}
    {{store.getters.doubleLikes}}
    <my-button @click="store.commit('incrementLikes')">like</my-button>
    <my-button @click="store.commit('decrementLikes')">dislike</my-button>
    <my-input placeholder="Поиск..." v-model="state.searchQuery" />
    <div class="app__btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select v-model="state.selectedSort" :options="state.sortOptions" />
    </div>
    <my-dialog v-model:show="state.dialogVisible">
      <post-form @createPost="create" />
    </my-dialog>
    <post-list @remove="remove" :posts="sortedAndSearchedPosts" />
    <div class="page__wrapper">
      <div
        @click="changePage(pageNumber)"
        class="page"
        :class="{ 'current-page': pageNumber === state.page }"
        v-for="pageNumber in state.totalPages"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<style>

.app__btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid white;
  padding: 10px;
}

.current-page {
  border: 2px solid violet;
}
</style>
