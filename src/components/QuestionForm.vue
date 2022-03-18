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
  <section
    class="container text-white rounded pt-4 pb-5 d-flex flex-column align-items-center question-form"
  >
    <div class="mb-4">
      <h4>Question {{ props.questionNr }} of {{props.nrOfQuestions}}</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h3>{{ props.question }}</h3>
    </div>
    <div class="btn-group-vertical text-white answer-buttons-form">
      <button
        v-for="a in props.answers"
        :key="a"
        class="btn-group-vertical answer-buttons mt-4"
      >
        <AnswerButton @onAnswerSelect="handleAnswerSelect($event)" :answerText="decodeHtml(a)" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.question-form {
  background-color: #0c304a;
}

.answer-buttons {
  width: 549px;
  background-color: #2DC0CC;
}

.answer-buttons:hover {
  background-color: #EF3C67;
}

</style>
