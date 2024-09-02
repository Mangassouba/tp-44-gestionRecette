import { defineStore } from 'pinia';

export const useRecettetore = defineStore('recipes', {
  state: () => ({
    recipes: [{
      title: 'maro',
      ingredients: 'poivre',
      type:"plat"
    }]
  }),
  actions: {
    addRecipe(recette) {
      this.recipes.push(recette);
    },
    updateRecipe(index, updatedRecipe) {
      this.recipes[index] = updatedRecipe;
    },
    deleteRecipe(index) {
      this.recipes.splice(index, 1);
    }, 
    getRecipe(index) {
      return this.recipes[index];
    },
  }
});
