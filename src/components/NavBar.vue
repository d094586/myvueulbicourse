<script setup lang="ts">


</script>

<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">vue3</h3>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
            <my-button @click="$router.push('/store')">store</my-button>
        </div>
    </div>
</template>

<style scoped>
.navbar{
    height: 50px;
    background-color: gray;
    box-shadow: 2px 2px 4px violet;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
    background-color: gray;
}
</style>
