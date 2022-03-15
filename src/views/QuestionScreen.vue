<script setup>
import QuestionForm from "../components/QuestionForm.vue";
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

const store = useStore()

// fetch array of questions
onMounted(async () => {
    await store.dispatch("fetchAllQuestions")
})

const questions = computed(() => store.state.questions);
console.log(questions);
console.log(questions.value);

const answers = ["1","2","3"];
// PLAN: 

// pass question information in QuestionForm
// - question
// - answers (How specify which answer is correct?)
// - type
// iterate through array: update i every time an answer is selected
// when i === nrOfAnswers -1 --> result screen
</script>

<template>
  <main>
    <QuestionForm :nrOfQuestions=10 :question="'2 + 2 = ?'" :answers=this.answers />
  </main>
</template>

<style scoped>

</style>
