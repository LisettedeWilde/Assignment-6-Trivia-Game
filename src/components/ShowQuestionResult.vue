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
  <h3>{{ currentQuestion.value }}</h3>
  <div v-for="answer in answers.value" :key="answer">
    <h5 v-if="answer === allQuestions.value[number].correct_answer" class="text-success">{{decodeHtml(answer)}}</h5>
    <h5 v-else-if="answer === givenAnswers.value[number] && answer !== allQuestions.value[number].correct_answer" class="text-danger">
      {{ decodeHtml(answer) }}
    </h5>
    <h5 v-else>boo {{ decodeHtml(answer) }}</h5>
  </div>
</template>
