import api from '../lib/axios';

export default {
  obtainCategories() {
    return api('/list.php?c=list');
  },
  searchRecipes({ name, category }) {
    return api(`/filter.php?c=${category}&i=${name}`);
  },
  searchRecipe(id) {
    return api(`/lookup.php?i=${id}`);
  }
};
