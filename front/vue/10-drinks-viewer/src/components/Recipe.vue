<script setup>
import { useDrinksStore } from '../stores/drinks';

const drinks = useDrinksStore();

defineProps({
  recipe: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img
        :src="recipe.strDrinkThumb"
        :alt="recipe.strDrink + ' image'"
        class="hover:scale-125 transition-transform hover:rotate-2"
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ recipe.strDrink }}</h2>
      <button
        @click="drinks.selectDrink(recipe.idDrink)"
        type="button"
        class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg transition-all duration-300 ease-in-out"
      >
        See Recipe
      </button>
    </div>
  </div>
</template>
