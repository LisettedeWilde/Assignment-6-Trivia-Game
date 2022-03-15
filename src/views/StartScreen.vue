<script>

</script>


<template>
    <header>
        <h1>Trivia Game</h1>
    </header>

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
            <h4>Difficulty</h4>

            <input type="radio" id="difficulty" name="difficulty" value="easy">
            <label for="easy">Easy</label>

            <input type="radio" id="difficulty" name="difficulty" value="medium">
            <label for="medium">Medium</label>

            <input type="radio" id="difficulty" name="difficulty" value="hard">
            <label for="hard">Hard</label>
        </div>
        
    </section>
</template>

<style scoped>

</style>