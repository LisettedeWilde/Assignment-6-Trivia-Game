<script setup>
    import { onBeforeMount } from "vue";
    import { useRouter } from "vue-router";
    import { updateUser } from "../api/user";

    const router = useRouter();
    const props = defineProps({ nameProp: Object});
    const score = localStorage.getItem('score');
    const userId = props.nameProp.id;
    const highScore = props.nameProp.highScore;
    console.log(userId);

// onBeforeMount(() => {
//  if (score > highScore) {
//             updateUser(userId, score);
//         }
// });

    function backToStart() {
        
        router.push("/");
    }

    function newQuiz() {

        router.push("/question");
    }
</script>


<template>
    <section class="container-sm rounded p-4 name d-flex flex-column align-items-center">
        <h4 class="text-white">{{nameProp.username}} </h4>
        <h4 class="text-white">Score: {{score}}</h4>

        <div>
            <button @click="backToStart" class="mt-5 mb-3 me-4 ps-4 pe-4 btn btn-primary rounded border-0" >Back to Start</button>
            <button @click="newQuiz" class="mt-5 mb-3 ps-4 pe-4 btn btn-primary rounded border-0">New Quiz</button>
        </div>
    </section>

    
</template>

<style scoped>
    .name {
        background-color: #0C304A;
    }
    .btn {
        background-color: #EF3C67;
        font-size: large;
        font-weight: 500;
    }

    .btn:hover {
        background-color: #d81b47;
    }
</style>