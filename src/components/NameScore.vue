<script setup>
import { onBeforeMount } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import ShowNameScore from "./ShowNameScore.vue";
import ShowQuestionResults from "./ShowQuestionResults.vue";


    const username = reactive({});

    onBeforeMount(()=>{
        let storedUser = JSON.parse(localStorage.getItem('user'));
        username.value = storedUser[0];
    });
    
</script>

<template>
  <ShowNameScore :nameProp="username.value" />
  <ShowQuestionResults />
</template>

<style scoped>
.name {
  background-color: #0c304a;
}
</style>
