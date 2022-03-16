<script setup>
import Header from "../components/Header.vue";
import QuestionForm from "../components/QuestionForm.vue";
import { onBeforeMount } from '@vue/runtime-core'
import { reactive, ref } from '@vue/reactivity'

const questions = reactive({})

onBeforeMount(()=>{
    fetch(localStorage.getItem('questions'))
    .then(response => response.json())
    .then(result => questions.value = result)
})


const answer = [
  ["b", "a", "c"],
  ["3", "6", "11284093"],
];
// PLAN:

// pass question information in QuestionForm
// - question
// - answers (How specify which answer is correct?)
// - type
// iterate through array: update i every time an answer is selected
// when i === nrOfAnswers -1 --> result screen
let i = ref(1)
let answers = reactive({})
let question = ref("")
let nrOfQuestions = ref("")

// called when an answer is selected
const handleAnswerSelected = () => {
  // update i and update answers and question

  // sort answers

  // check if i === nrOfQuestions -1 --> Result page

  // store given answer
}

</script>

<template>
  <Header />
  <QuestionForm
    @onAnswerSelect="handleAnswerSelected"
    :questionNr="1"
    :nrOfQuestions="10"
    :question="'2 + 2 = ?'"
    :answers="this.answer"
  />
</template>

<style scoped></style>
