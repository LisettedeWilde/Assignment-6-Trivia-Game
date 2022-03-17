<script setup>
import AnswerButton from "../components/AnswerButton.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  questionProps: Object,
});

console.log(props.questionProps)

const router = useRouter(); 
let i = 0;

const emit = defineEmits(["onAnswerSelected"])
// sort answers alphabetically
// const answers = props.questionProps.incorrect_answers;
// props.answers[0].sort()

const handleAnswerSelect = () => {
  emit("onAnswerSelected");
// store given answer (in array?)
}

</script>

<template>
  <div
    class="container rounded p-4 d-flex flex-column align-items-center question-form"
  >
    <div>
      <h4>Question {{ i }} of 10</h4>
    </div>
    <div class="d-flex justify-content-center">
      <h3>{{ props.questionProps.question }}</h3>
    </div>
    <div class="btn-group-vertical answer-buttons-form">
      <div
        v-for="a in props.questionProps.incorrect_answers"
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
