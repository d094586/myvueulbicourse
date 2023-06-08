<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { reactive, computed, onMounted, watch, ref } from "vue";
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

onMounted(() => {
  fetchPosts();
});

const state = reactive({
  posts: [
    { id: 1, title: "Название1", body: "Описание 1" },
    { id: 2, title: "Название2", body: "Описание 2" },
    { id: 3, title: "Название3", body: "Описание 3" },
  ],
  title: "",
  body: "",
  dialogVisible: false,
  selectedSort: " ",
  sortOptions: [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ],
  searchQuery: "",
  page: 1,
  limit: 10,
  totalPages: 0,
});

const searchQuery = ref("");

const sortedPosts = computed(() => {
  return [...state.posts].sort((post1, post2) => {
    return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
  });
});

const sortedAndSearchedPosts = computed(() => {
  return [...sortedPosts.value].filter((post) => {
    return post.title.includes(state.searchQuery);
  });
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

async function fetchPosts() {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _page: state.page,
        _limit: state.limit,
      },
    });
    state.totalPages = Math.ceil(resp.headers["x-total-count"] / state.limit);
    state.posts = resp.data;
  } catch (error) {
    console.log(error);
  }
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
