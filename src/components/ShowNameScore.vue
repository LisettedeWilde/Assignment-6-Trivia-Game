<script setup>
    
const props = defineProps({ nameProp: Object});
</script>


<template>
    <section class="container-sm rounded p-4 name d-flex flex-column align-items-center">
        <h4 class="text-white">Name: {{nameProp.username}} </h4>
        <h4 class="text-white">Score: 100</h4>
    </section>
</template>

<style scoped>
    
</style>