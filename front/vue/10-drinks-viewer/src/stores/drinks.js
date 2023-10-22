import { ref, reactive, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';

import { useModalStore } from './modal';
import ApiService from '../services/ApiService';

export const useDrinksStore = defineStore('drinks', () => {
  const modal = useModalStore();

  const categories = ref([]);
  const search = reactive({
    name: '',
    category: ''
  });
  const loading = ref(false);
  const recipes = ref([]);
  const recipe = ref({});

  onMounted(async () => {
    const {
      data: { drinks }
    } = await ApiService.obtainCategories();
    categories.value = drinks;
  });

  async function obtainRecipes() {
    loading.value = true;
    const {
      data: { drinks }
    } = await ApiService.searchRecipes(search);
    recipes.value = drinks;
    loading.value = false;
  }

  async function selectDrink(id) {
    const {
      data: { drinks }
    } = await ApiService.searchRecipe(id);
    recipe.value = drinks[0];
    modal.handleClickModal();
  }

  const noRecipes = computed(() => recipes.value.length === 0);

  return {
    categories,
    search,
    loading,
    recipes,
    recipe,
    obtainRecipes,
    selectDrink,
    noRecipes
  };
});
