<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useDrinksStore } from '../stores/drinks';
import { useNotificationStore } from '../stores/notification';

const route = useRoute();
const drinks = useDrinksStore();
const notification = useNotificationStore();

const isHome = computed(() => route.name === 'home');

const handleSubmit = () => {
  if (Object.values(drinks.search).includes('')) {
    notification.$patch({
      text: 'All fields are required',
      show: true,
      error: true
    });
    return;
  }
  drinks.obtainRecipes();
};
</script>

<template>
  <header :class="{ header: isHome }" class="bg-slate-800">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="logo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink
            :to="{ name: 'home' }"
            active-class="text-orange-500"
            class="uppercase font-bold"
          >
            Home
          </RouterLink>
          <RouterLink
            :to="{ name: 'favorites' }"
            active-class="text-orange-500"
            class="uppercase font-bold"
          >
            Favorites
          </RouterLink>
        </nav>
      </div>

      <form
        v-if="isHome"
        @submit.prevent="handleSubmit"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label for="ingredient" class="block text-white uppercase font-extrabold text-lg"
            >Name or Ingredients</label
          >
          <input
            id="ingredient"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Name or Ingredient: ej. Vodka, Tequila, etc"
            v-model="drinks.search.name"
          />
        </div>

        <div class="space-y-4">
          <label for="category" class="block text-white uppercase font-extrabold text-lg"
            >Category</label
          >
          <select
            id="category"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="drinks.search.category"
          >
            <option value="">-- Select --</option>
            <option
              v-for="category in drinks.categories"
              :key="category.strCategory"
              :value="category.strCategory"
            >
              {{ category.strCategory }}
            </option>
          </select>
        </div>

        <input
          type="submit"
          value="Search Recipes"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase transition-all duration-300 ease-in-out"
        />
      </form>
    </div>
  </header>
</template>

<style>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
