<script setup>
import Header from "../components/Header.vue";
import QuestionForm from "../components/QuestionForm.vue";
import { onBeforeMount } from "vue";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

let i = 0;
const router = useRouter();
const question = reactive({});
let allQuestions = [];
const questionNr = reactive({});
const nrOfQuestions = reactive({});
const answers = reactive({});

onBeforeMount(() => {
  // fetch questions from api
  fetch(localStorage.getItem("questionUrl"))
    .then((response) => response.json())
    .then((result) => {
      // array of all questions
      allQuestions = result.results;
      // total nr of questions
      nrOfQuestions.value = allQuestions.length;
      // first question
      question.value = allQuestions[0].question;
      console.log("question : " + allQuestions[0]);
      console.log(allQuestions.length);

      questionNr.value = 1;
      // store answers in array
      answers.value = allQuestions[0].incorrect_answers;
      answers.value.push(allQuestions[0].correct_answer);
      answers.value.sort();
    });
});

function handleAnswerSelected() {
  i++;
  questionNr.value = i + 1;
  console.log("i : " + i);
  // check if i === nrOfQuestions
  if (i === nrOfQuestions.value) {
    router.push("/result");
  } else {
    fetch(localStorage.getItem("questionUrl"))
      .then((response) => response.json())
      .then((result) => {
        allQuestions = result.results;
        // ith question
        question.value = allQuestions[i].question;
        console.log(allQuestions[i]);
        // store answers in array
        answers.value = allQuestions[i].incorrect_answers;
        answers.value.push(allQuestions[i].correct_answer);
        answers.value.sort();
      });
  }
}
</script>

<template>
  <!-- <Header /> -->
  <QuestionForm
    @onAnswerSelected="handleAnswerSelected"
    :nrOfQuestions="nrOfQuestions.value"
    :questionNr="questionNr.value"
    :answers="answers.value"
    :question="question.value"
  />
</template>

<style scoped>
</style>
