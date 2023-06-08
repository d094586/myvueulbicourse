import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/pages/Main.vue';
import PostsPage from '@/components/pages/PostsPage.vue';
import About from '@/components/pages/About.vue';
import PostIDPage from '@/components/pages/PostIDPage.vue';
import PostIDPageTwo from '@/components/pages/PostIDPageTwo.vue';
import PostsPageWithStore from '@/components/pages/PostsPageWithStore.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/posts/:id',
      name: 'idpost',
      component: PostIDPage
    },
    {
      path: '/posts/:id/:test',
      name: 'et',
      component: PostIDPageTwo
    },
    {
      path: '/store',
      name: 'postss',
      component: PostsPageWithStore
    },
  ]
})

export default router
