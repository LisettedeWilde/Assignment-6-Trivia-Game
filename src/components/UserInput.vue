<script setup>
    
</script>

<template>
    <section class="container rounded p-4 d-flex flex-column align-items-center user">
        
        
        <label class="h3 text-white" for="username">Enter Username:</label>
        <input  type="text" id="username" v-model="username">
    
        <label class="h5 text-white" for="amountQ">Number of Questions:</label>
        <input type="number" id="amountQ" min="1" v-model="number">
        
        <p class="h5 text-white">Difficulty:</p>
        <div>
            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="easy" v-model="difficulty">
            <label class="me-3 text-white" for="easy">Easy</label>

            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="medium" v-model="difficulty">
            <label class="me-3 text-white" for="medium">Medium</label>

            <input class="mx-2" type="radio" id="difficulty" name="difficulty" value="hard" v-model="difficulty">
            <label class="text-white" for="hard">Hard</label>
        </div>
        
        <label class="h5 text-white" for="category">Category:</label>
        <select name="category" id="category" v-model="category">
            <option value="27">Animal</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="16">Board Games</option>
            <option value="10">Books</option>
            <option value="32">Cartoon & Animations</option>
            <option value="29">Comics</option>
            <optio value="11">Films</optio>
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
        


        
        <p class="h5 text-white">Type of Questions:</p>
        <div>
            <input class="mx-2" type="checkbox" id="multiple" value="multiple" v-model="category">
            <label class="me-3 text-white" for="multiple">Multiple Choice</label>

            <input class="mx-2" type="checkbox" id="boolean" value="boolean" v-model="category">
            <label class="text-white" for="boolean">True or False</label>
        </div>

        
            <input class="btn btn-primary bg-900 rounded border-0" @:click="doSomething" type="submit" value="Confirm">
        
    </section>
</template>

<style scoped>
    .user {
        background-color: #0C304A;
    }
</style>
