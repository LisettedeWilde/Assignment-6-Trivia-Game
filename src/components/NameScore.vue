<script setup>
    import { onBeforeMount} from '@vue/runtime-core';
    import { reactive } from '@vue/reactivity';
    import ShowNameScore from './ShowNameScore.vue';

    const username = reactive({});

    onBeforeMount(()=>{
        let storedUser = JSON.parse(localStorage.getItem('user'));
        username.value = storedUser[0];
    });
    
</script>


<template>
    <ShowNameScore :nameProp="username.value"/>
</template>

<style scoped>
</style>