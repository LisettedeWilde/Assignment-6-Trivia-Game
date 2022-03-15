<script setup>
import AnswerButton from "../components/AnswerButton.vue";
import router from "../router";

defineProps({
  nrOfQuestions: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
});

let i = 0;

const handleAnswerSelect = () => {
  // store given answer (in array?)

  // check if it's the last question
  if (i >= this.nrOfQuestions - 1) {
    // got to result page
    router.push("/result");
  } else {
    i++;
  }
};
</script>

<template>
  <div
    class="container rounded p-4 d-flex flex-column align-items-center question-form"
  >
    <div>
      <h4>Question {{ this.i + 1 }} of {{ nrOfQuestions }}</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h3>{{ question }}</h3>
    </div>
    <div class="btn-group-vertical answer-buttons-form">
      <div
        v-for="a in this.answers"
        :key="a"
        class="btn-group-vertical answer-buttons"
      >
        <AnswerButton @onAnswerSelect="handleAnswerSelect" :answerText="a" />
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
  /* width: 100%; */
}
</style>
