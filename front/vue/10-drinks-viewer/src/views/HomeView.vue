<script setup>
import Recipe from '../components/Recipe.vue';
import Spinner from '../components/Spinner.vue';

import { useDrinksStore } from '../stores/drinks';

const drinks = useDrinksStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>
  <Spinner v-if="drinks.loading" />
  <p v-else-if="drinks.noRecipes" class="my-10 text-center text-2xl">
    There are no results, use form for searching recipes
  </p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Recipe v-for="recipe in drinks.recipes" :key="recipe.idDrink" :recipe="recipe" />
  </div>
</template>
