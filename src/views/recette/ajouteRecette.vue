<template>
    <div class="container">
      <h2>Ajouter une recette</h2>
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
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRecettetore } from '../../store/recetteStore';
import { useRouter } from 'vue-router';
  
  const title = ref('');
  const ingredients = ref('');
  const type = ref('plat');
  
  const store = useRecettetore();
  const router = useRouter()
  
  function handleSubmit() {
    store.addRecipe({
      title: title.value,
      ingredients: ingredients.value,
      type: type.value
    });
    title.value = '';
    ingredients.value = '';
    type.value = 'plat';
    router.push('/recette')
  }
  </script>
  