<script>

</script>


<template>
<!-- Add to App.vue? -->
    <header>
        <h1>Trivia Game</h1>
    </header>

<!--  Move to different component? -->
    <section>
        <div>
            <label for="username">Enter Username:</label>
            <input type="text" id="username" name="username">
        </div>

        <div>
            <label  for="amountQ">Number of Questions:</label>
            <input type="number" id="amountQ" name="amountQ" min="1">
        </div>

        <div>
            <h5>Difficulty:</h5>

            <input type="radio" id="difficulty" name="difficulty" value="easy">
            <label for="easy">Easy</label>

            <input type="radio" id="difficulty" name="difficulty" value="medium">
            <label for="medium">Medium</label>

            <input type="radio" id="difficulty" name="difficulty" value="hard">
            <label for="hard">Hard</label>
        </div>

        <div>
            <label for="category">Category</label>
            <select name="category" id="category">
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
        
    </section>
</template>

<style scoped>

</style>