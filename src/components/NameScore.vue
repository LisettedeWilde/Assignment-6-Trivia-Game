<script setup>
    import { onBeforeMount} from '@vue/runtime-core';
    import { reactive } from '@vue/reactivity';
    import ShowNameScore from './ShowNameScore.vue';

    const username = reactive({})

    onBeforeMount(()=>{
        username.value = JSON.parse(localStorage.getItem('user'));
    })

    console.log(typeof(username.value));
    console.log(username.value);
    

//btn for back to start

//btn to restart quiz with same settings

</script>


<template>
    <ShowNameScore :nameProp="username"/>
</template>

<style scoped>
    .name {
        background-color: #0C304A;
    }
</style>