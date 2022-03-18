<script setup>
import { reactive } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import decodeHtml from "../utils/htmlDecoder.js";

const props = defineProps({
  number: Number,
});

let answers = reactive({});
let givenAnswers = reactive({});
let allQuestions = reactive({});
let currentQuestion = reactive({});

onBeforeMount(() => {
  allQuestions.value = JSON.parse(localStorage.getItem("allQuestions"));
  givenAnswers.value = JSON.parse(localStorage.getItem("givenAnswers"));
  // get question
  currentQuestion.value = decodeHtml(allQuestions.value[props.number].question);
  // get answers for question
  answers.value = allQuestions.value[props.number].incorrect_answers;
});
</script>

<template>
<section class="container-sm rounded p-4 mb-3 results">
  <div>
    <h3 class="text-center text-white">{{ currentQuestion.value }}</h3>
    <div class="d-flex flex-column align-items-center" v-for="answer in answers.value" :key="answer">
      <h5 v-if="answer === allQuestions.value[number].correct_answer" class="card correct text-center w-50 text-white">{{decodeHtml(answer)}}</h5>
      <h5 v-else-if="answer === givenAnswers.value[number] && answer !== allQuestions.value[number].correct_answer" class="card text-center w-50 wrong text-white">
        {{ decodeHtml(answer) }}
      </h5>
      <h5 class="text-white card w-50 text-center other" v-else>{{ decodeHtml(answer) }}</h5>
    </div>
  </div>
</section>
</template>

<style scoped>
  .results {
    background-color: #0C304A;
  }

  .correct {
    background-color: green;
  }

  .wrong {
    background-color: red;
  }

  .other {
    background-color: #2DC0CC;
  }
</style>