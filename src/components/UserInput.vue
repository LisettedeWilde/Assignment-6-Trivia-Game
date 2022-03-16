<script setup>
import { getUser } from "../api/user.js";
import { getQuestions } from "../api/questions.js";
import { ref, reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const number = ref("");
const difficulty = ref("");
const category = ref("");
const type = ref([]);
let url = "";

    function confirm() {
        //get username
        getUser(username.value);

        //if username is any omit from url
        if (category.value === "any") {
            url = `amount=${number.value}&difficulty=${difficulty.value}`;
        } else {
            url = `amount=${number.value}&category=${category.value}&difficulty=${difficulty.value}`;
        }

        //if type.value has 1 add it to url otherwise omit
        if (type.value.length === 1) {
            url = url + `&type=${type.value}`;
        }
        
        getQuestions(url);

        router.push("/questions");
    }
</script>

<template>
    <section class="container-sm  rounded p-4 user">
        
        <form @submit.prevent="confirm" class="row-md-auto d-flex flex-column align-items-center">
        <label class=" mt-3 h3 row text-white">Enter Username:</label>
        <input class="row" type="text" v-model="username" required>
    
        <label class="mt-4 row h5 text-white">Number of Questions:</label>
        <input class="row" type="number" min="1" v-model="number" required>
        
        <p class="mt-4 row h5 text-white">Difficulty:</p>
        <div>
            <input class="mx-2" type="radio" name="difficulty" value="easy" v-model="difficulty" required>
            <label class="me-3 text-white" for="easy">Easy</label>

            <input class="mx-2" type="radio" name="difficulty" value="medium" v-model="difficulty">
            <label class="me-3 text-white" for="medium">Medium</label>

            <input class="mx-2" type="radio" name="difficulty" value="hard" v-model="difficulty">
            <label class="text-white" for="hard">Hard</label>
        </div>
        
        <label class="mt-4 row h5 text-white" for="category">Category:</label>
        <select class="row" name="category" id="category" v-model="category" required>
            <option value="any" selected>Any Category</option>
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
        
        <p class=" mt-4 row h5 text-white">Type of Questions:</p>
        <div>
            <input class="mx-2" type="checkbox" value="multiple" v-model="type">
            <label class="me-3 text-white">Multiple Choice</label>

            <input class="mx-2" type="checkbox" value="boolean" v-model="type">
            <label class="text-white">True or False</label>
        </div>

        <button class="mt-5 mb-3 ps-4 pe-4 btn btn-primary rounded border-0" type="submit">Confirm</button>
        </form>
    </section>
</template>

<style scoped>
    .user {
        background-color: #0C304A;
    }

    .btn {
        background-color: #EF3C67;
        font-size: x-large;
        font-weight: 500;
    }

    .btn:hover {
        background-color: #d81b47;
    }

</style>
