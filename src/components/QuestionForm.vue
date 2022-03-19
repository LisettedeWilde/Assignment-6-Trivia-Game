<script setup>
import decodeHtml from "../utils/htmlDecoder.js"

const props = defineProps({
  question: String,
  nrOfQuestions: Number,
  questionNr: Number,
  answers: Array,
});

// event when button gets clicked
const emit = defineEmits(["onAnswerSelected"]);

// calls event
const onButtonClick = (e) => {
  emit("onAnswerSelected", e);
  
};

</script>

<template>
  <section
    class="container text-white rounded pt-4 pb-5 d-flex flex-column align-items-center question-form"
  >
    <div class="mb-4">
      <h4>Question {{ props.questionNr }} of {{props.nrOfQuestions}}</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h3>{{ decodeHtml(props.question) }}</h3>
    </div>
    <div class="btn-group-vertical text-white answer-buttons-form">
      <div
        v-for="a in props.answers"
        :key="a"> 
        <button class="btn mt-4 btn-primary rounded border-0" @click="onButtonClick(a)"> {{ decodeHtml(a) }} </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.question-form {
  background-color: #0c304a;
}

.btn {
  width: 500px;
  background-color: #2DC0CC;
}

.btn:hover {
  background-color: #EF3C67;
}

</style>
