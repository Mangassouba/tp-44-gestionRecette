import { defineStore } from 'pinia';

export const useRecettetore = defineStore('recipes', {
  state: () => ({
    recipes: [{
      title: 'crepe',
      ingredients: '30 cl de lait, 10 cl d\'eau ,1/2 sachet de levure de boulanger , 7 œufs',
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
