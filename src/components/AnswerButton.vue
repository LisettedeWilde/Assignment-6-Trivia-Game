<script setup>
    defineProps({
        answerText: {
            type: String,
            required: true
        }
    })

    // event when button gets clicked
    const emit = defineEmits(["onAnswerSelect"])

    // calls event
    const onButtonClick = () => {
        emit("onAnswerSelect") //TODO : add method in parent class, add answer as argument to store it
    }
</script>

<template>
<button @click="onButtonClick" type="button" class="btn btn-info button">{{answerText}}</button>    
</template>

<style scoped>
    .button {
        max-width: 100%;
        width: 400px;
    }
</style>