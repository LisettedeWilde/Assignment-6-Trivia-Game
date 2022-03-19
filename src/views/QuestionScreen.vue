<script setup>
import Header from "../components/Header.vue";
import QuestionForm from "../components/QuestionForm.vue";
import decodeHtml from "../utils/htmlDecoder";
import { computed } from "@vue/runtime-core";
import { onBeforeMount } from "vue";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

let i = 0;
const router = useRouter();
const store = useStore();
let allQuestions = [];
const question = reactive({});
const questionNr = reactive({});
const nrOfQuestions = reactive({});
const questionURL = computed(()=> store.state.url)
const answers = reactive({});

let givenAnswers = [];
let score = 0;

onBeforeMount(() => {
  // fetch questions from api
  fetch(questionURL.value)
    .then((response) => response.json())
    .then((result) => {
      // set question number
      questionNr.value = 1;
      // get the array of all questions
      allQuestions = result.results;
      // total nr of questions
      nrOfQuestions.value = allQuestions.length;
      // first question
      question.value = decodeHtml(allQuestions[0].question);
      // store answers in array
      answers.value = allQuestions[0].incorrect_answers;
      answers.value.push(allQuestions[0].correct_answer);
      answers.value.sort();
    });
});

function handleAnswerSelected(answerText) {
  // store selected answer in array
  givenAnswers.push(answerText);

  // check if given answer equals correct answer and update score accordingly
  if (allQuestions[i].correct_answer === answerText) {
    score += 10;
  }

  // update question nr
  i++;
  questionNr.value = i + 1;
  
  // check if i === nrOfQuestions
  if (i === nrOfQuestions.value) {
    // send all questions to local storage
    localStorage.setItem('allQuestions', JSON.stringify(allQuestions))
    // send given answers to local storage
    localStorage.setItem('givenAnswers', JSON.stringify(givenAnswers))
    // send score to local storage
    store.commit('setScore', score);
    // go to results page
    router.push("/results");
  }
  // get next question
  else {
        // ith question
        question.value = decodeHtml(allQuestions[i].question);
        // store answers in array
        answers.value = allQuestions[i].incorrect_answers;
        answers.value.push(allQuestions[i].correct_answer);
        answers.value.sort();
  }
}
</script>

<template>
  <Header />
  <QuestionForm
    @onAnswerSelected="handleAnswerSelected($event)"
    :nrOfQuestions="nrOfQuestions.value"
    :questionNr="questionNr.value"
    :answers="answers.value"
    :question="question.value"
  />
</template>

<style scoped>
</style>
