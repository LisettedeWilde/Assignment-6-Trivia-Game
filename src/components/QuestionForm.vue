<script setup>
import AnswerButton from "../components/AnswerButton.vue";
import decodeHtml from "../utils/htmlDecoder.js"

const props = defineProps({
  question: String,
  nrOfQuestions: Number,
  questionNr: Number,
  answers: Array,
});



const emit = defineEmits(["onAnswerSelected"])

const handleAnswerSelect = (e) => {
  emit("onAnswerSelected", e);
}
</script>

<template>
  <div
    class="container rounded p-4 d-flex flex-column align-items-center question-form"
  >
    <div class="mb-4">
      <h4>Question {{ props.questionNr }} of {{props.nrOfQuestions}}</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h3>{{ props.question }}</h3>
    </div>
    <div class="btn-group-vertical answer-buttons-form">
      <div
        v-for="a in props.answers"
        :key="a"
        class="btn-group-vertical answer-buttons"
      >
        <AnswerButton @onAnswerSelect="handleAnswerSelect($event)" :answerText="decodeHtml(a)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-form {
  color: white;
  background-color: #0c304a;
  width: 900px;
}

.answer-buttons {
  margin-top: 20px;
  width: 549px;
}

.answer-buttons-form {
  margin-bottom: 70px;
}
button {
  color: white;
}
</style>
