<script setup>
    import { onBeforeMount} from '@vue/runtime-core';
    import { reactive } from '@vue/reactivity';
    import ShowNameScore from './ShowNameScore.vue';

    const username = reactive({})
    

    onBeforeMount(()=>{
        fetch(localStorage.getItem('user'))
        .then(response => response.json())
        .then(result => username.value = result);
    });


//console.log(username.value);

//btn for back to start

//btn to restart quiz with same settings

</script>


<template>
    <ShowNameScore :nameProp="username.value"/>
</template>

<style scoped>
    .name {
        background-color: #0C304A;
    }
</style>