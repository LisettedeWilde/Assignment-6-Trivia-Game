<script setup>
defineProps({
  answerText: {
    type: String,
    required: true,
  },
});

// event when button gets clicked
const emit = defineEmits(["onAnswerSelect"]);

// calls event
const onButtonClick = (e) => {
  emit("onAnswerSelect", e);
};
</script>

<template>
  <button
    @click="onButtonClick(answerText)"
    type="button"
    class="btn btn-primary rounded border-0 button"
  >
    {{ answerText }}
  </button>
</template>

<style scoped>
.btn {
  background-color: #2DC0CC;
}

.btn:hover {
  background-color: #ef3c67;
}
.button {
  max-width: 100%;
  width: 400px;
}
</style>
