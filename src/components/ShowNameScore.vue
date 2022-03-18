<script setup>
    import { computed } from "@vue/runtime-core";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    import { updateUser } from "../api/user";

    const store = useStore();
    const router = useRouter();
    const score = computed(()=> store.state.score);
    const user = computed(()=> store.state.user);

    function backToStart(userId, highScore, score) {
        if (score > highScore) {
            updateUser(userId, score);
        }
        router.push("/");
    }

    function newQuiz(userId, highScore, score) {
        if (score > highScore) {
            updateUser(userId, score);
        }
        router.push("/question");
    }
</script>


<template>
    <section class="container-sm rounded p-4 name d-flex flex-column align-items-center">
        <h4 class="text-white" v-if="user[0]!=undefined" >{{user[0].username}} </h4>
        <h4 class="text-white">Score: {{score}}</h4>

        <div>
            <button @click="backToStart(user[0].id, user[0].highScore, score)" class="mt-5 mb-3 me-4 ps-4 pe-4 btn btn-primary rounded border-0" >Back to Start</button>
            <button @click="newQuiz(user[0].id, user[0].highScore, score)" class="mt-5 mb-3 ps-4 pe-4 btn btn-primary rounded border-0">New Quiz</button>
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