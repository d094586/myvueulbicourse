<script setup lang="ts">
const emit = defineEmits(['update:show'])
const props = defineProps({
    show: Boolean
})

function hideDialog(){
    emit('update:show', false)
}
</script>

<template>
<div class="dialog" v-if="show === true" @click="hideDialog">
    <div class="dialog__content" @click.stop>
        <slot></slot>
    </div>
</div>
</template>

<style>
.dialog{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    display: flex;
}

.dialog__content{
    margin: auto;
    background: #121212;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px 40px;
}
</style>
