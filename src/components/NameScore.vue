<script setup>
import { onBeforeMount } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import ShowNameScore from "./ShowNameScore.vue";
import ShowQuestionResults from "./ShowQuestionResults.vue";

const username = reactive({});

onBeforeMount(() => {
  username.value = localStorage.getItem("user");
});

console.log(typeof username.value); // return undefined
console.log(username.value); // returns undefined

//btn for back to start

//btn to restart quiz with same settings
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
