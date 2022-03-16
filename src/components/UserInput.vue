<script setup>
import { getUser } from "../api/user.js";
import { getQuestions } from "../api/questions.js";
import { ref, reactive } from "@vue/reactivity";

const username = ref("");
const number = ref();
const difficulty = ref("");
const category = ref();
//const type = ref();


    function confirm() {
        getUser(username.value);
        const questions = getQuestions(number.value, category.value, difficulty.value);

        //router.push("/welcome");
    }
</script>

<template>
    <section class="container-sm row-md-auto d-flex flex-column align-items-center rounded p-4 user">
        
       
        <label class="h3 row text-white" for="username">Enter Username:</label>
        <input class="row" type="text" id="username" v-model="username">
    
        <label class="row h5 text-white" for="amountQ">Number of Questions:</label>
        <input class="row" type="number" id="amountQ" min="1" v-model="number">
        
        <p class="row h5 text-white">Difficulty:</p>
        <div>
            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="easy" v-model="difficulty">
            <label class="me-3 text-white" for="easy">Easy</label>

            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="medium" v-model="difficulty">
            <label class="me-3 text-white" for="medium">Medium</label>

            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="hard" v-model="difficulty">
            <label class="text-white" for="hard">Hard</label>
        </div>
        
        <label class="row h5 text-white" for="category">Category:</label>
        <select class="row" name="category" id="category" v-model="category">

            <option value="27">Animal</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="16">Board Games</option>
            <option value="10">Books</option>
            <option value="32">Cartoon & Animations</option>
            <option value="29">Comics</option>
            <option value="11">Films</option>
            <option value="31">Japanese Anime & Manga</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theaters</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="9">General Knowledge</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="20">Mythology</option>
            <option value="24">Politics</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="30">Gadgets</option>
            <option value="19">Mathematics</option>
            <option value="21">Sports</option>
            <option value="28">Vehicles</option>
        </select>
        


        
        <p class="row h5 text-white">Type of Questions:</p>
        <div>
            <input class="mx-2" type="checkbox" id="multiple" value="multiple" v-model="type">
            <label class="me-3 text-white" for="multiple">Multiple Choice</label>

            <input class="mx-2" type="checkbox" id="boolean" value="boolean" v-model="type">
            <label class="text-white" for="boolean">True or False</label>
        </div>

        
            <button class="m-4 btn btn-primary rounded border-0" @click="confirm">Confirm</button>
    
    </section>
</template>

<style scoped>
    .user {
        background-color: #0C304A;
    }

</style>
