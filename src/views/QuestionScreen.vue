<script setup>
import QuestionForm from "../components/QuestionForm.vue";
import { onBeforeMount } from '@vue/runtime-core';
import { reactive } from '@vue/reactivity'

const questions = reactive({});
let allQuestions = []
const questionUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`
onBeforeMount(() => {
  fetch(questionUrl)
  .then(response => response.json())
  .then(result => {
    allQuestions = result.results;
    console.log(allQuestions)
        questions.value = allQuestions[0];
    console.log(questions.value)
  })
})

// PLAN: 

// pass question information in QuestionForm
// - question
// - answers (How specify which answer is correct?)
// - type
// iterate through array: update i every time an answer is selected
// when i === nrOfAnswers -1 --> result screen
</script>

<template>
    <!-- <QuestionForm :nrOfQuestions=10 :question="'2 + 2 = ?'" :answers=this.answers /> -->
    <QuestionForm :questionsProps="questions.value"/>
</template>

<style scoped>

</style>
