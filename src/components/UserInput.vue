<script setup>
    
</script>

<template>
    <section>
        <div>
            <label for="username">Enter Username:</label>
            <input type="text" id="username" v-model="username">
        </div>

        <div>
            <label  for="amountQ">Number of Questions:</label>
            <input type="number" id="amountQ" min="1" v-model="number">
        </div>

        <div>
            <h5>Difficulty:</h5>

            <input type="radio" id="difficulty" value="easy" v-model="difficulty">
            <label for="easy">Easy</label>

            <input type="radio" id="difficulty" value="medium" v-model="difficulty">
            <label for="medium">Medium</label>

            <input type="radio" id="difficulty" value="hard" v-model="difficulty">
            <label for="hard">Hard</label>
        </div>

        <div>
            <label for="category">Category:</label>
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
        </div>


        <div>
            <h5>Type of Questions:</h5>

            <input type="checkbox" id="multiple" value="multiple" v-model="category">
            <label for="multiple">Multiple Choice</label>

            <input type="checkbox" id="boolean" value="boolean" v-model="category">
            <label for="boolean">True or False</label>
        </div>

        <div>
            <input @:click="doSomething" type="submit" value="Confirm">
        </div>
    </section>
</template>

<style scoped>

</style>
