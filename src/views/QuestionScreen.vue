<script setup>
import Header from "../components/Header.vue";
import QuestionForm from "../components/QuestionForm.vue";
import { onBeforeMount } from "vue";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

let i = 0;
const router = useRouter();
let allQuestions = [];
const question = reactive({});
const questionNr = reactive({});
const nrOfQuestions = reactive({});
const answers = reactive({});
let givenAnswers = [];
let score = 0;

// https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

onBeforeMount(() => {
  // fetch questions from api
  fetch(localStorage.getItem("questionUrl"))
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
    score++;
  }

  // update question nr
  i++;
  questionNr.value = i + 1;
  
  // check if i === nrOfQuestions
  if (i === nrOfQuestions.value) {
    // send given answers to local storage
    localStorage.setItem('givenAnswers', givenAnswers)
 
    // send score to local storage
    localStorage.setItem('score', score)

    // go to results page
    router.push("/result");
  }
  // get next question
  else {
    fetch(localStorage.getItem("questionUrl"))
      .then((response) => response.json())
      .then((result) => {
        // get the array of all questions
        allQuestions = result.results;
        // ith question
        question.value = decodeHtml(allQuestions[i].question);
        // store answers in array
        answers.value = allQuestions[i].incorrect_answers;
        answers.value.push(allQuestions[i].correct_answer);
        answers.value.sort();
      });
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
