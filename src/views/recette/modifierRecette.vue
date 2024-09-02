<template>
    <div class="container">
      <h2>Modifier la recette</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Titre</label>
          <input v-model="title" type="text" id="title" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">Ingrédients</label>
          <textarea v-model="ingredients" id="ingredients" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Type de recette</label>
          <select v-model="type" id="type" class="form-select" required>
            <option value="entrée">Entrée</option>
            <option value="plat">Plat</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
import { useRecettetore } from '../../store/recetteStore';
  
  const store = useRecettetore();
  const route = useRoute();
  const router = useRouter();
  
  const index = route.params.index;
  const recipe = ref({});
  
  const title = ref('');
  const ingredients = ref('');
  const type = ref('plat');
  
  onMounted(() => {
    recipe.value = store.getRecipe(index);
    title.value = recipe.value.title;
    ingredients.value = recipe.value.ingredients;
    type.value = recipe.value.type;
  });
  
  function handleSubmit() {
    store.updateRecipe(index, {
      title: title.value,
      ingredients: ingredients.value,
      type: type.value
    });
    router.push({ name: 'recette' });
  }
  </script>
  