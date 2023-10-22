import { ref, watch, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';

import { useDrinksStore } from './drinks';
import { useModalStore } from './modal';
import { useNotificationStore } from './notification';

export const useFavoritesStore = defineStore('favorites', () => {
  const drinks = useDrinksStore();
  const modal = useModalStore();
  const notification = useNotificationStore();

  const favorites = ref([]);

  watch(favorites, () => syncLocalStorage(), { deep: true });

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites')) ?? [];
  });

  function syncLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  function existFavorite() {
    return favorites.value.some((favorite) => favorite.idDrink === drinks.recipe.idDrink);
  }

  function addFavorite() {
    favorites.value.push(drinks.recipe);
    notification.text = 'Added to favorites';
    notification.show = true;
  }

  function deleteFavorite() {
    favorites.value = favorites.value.filter(
      (favorite) => favorite.idDrink !== drinks.recipe.idDrink
    );
    notification.text = 'Deleted from favorites';
    notification.show = true;
  }

  function handleClickFavorite() {
    if (existFavorite()) deleteFavorite();
    else addFavorite();
    modal.handleClickModal();
  }

  const noFavorites = computed(() => favorites.value.length === 0);

  return {
    favorites,
    handleClickFavorite,
    existFavorite,
    noFavorites
  };
});
