<script setup>
import { reactive } from "@vue/reactivity";
import ShowQuestionResult from "./ShowQuestionResult.vue";
import { onBeforeMount } from "vue";

let allQuestions = reactive({});
let answers = reactive({});
let givenAnswers = reactive({});
let length = reactive({})
let nrArray = reactive({})

onBeforeMount(() => {
  allQuestions.value = JSON.parse(localStorage.getItem("allQuestions"));
  length.value = allQuestions.value.length
  nrArray.value = [...Array(length.value).keys()]
});



</script>

<template>
  <div class="wrapper container-sm rounded p-4 results">
    <div v-for="a in nrArray.value" :key="a">
      <ShowQuestionResult :number="a" />
    </div>
  </div>
</template>

<style scoped>
</style>
