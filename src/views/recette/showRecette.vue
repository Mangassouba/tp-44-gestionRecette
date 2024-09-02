<template>
    <div class="container">
      <h2>Détails de la recette</h2>
      <div v-if="recipe">
        <h3>{{ recipe.title }}</h3>
        <p><strong>Ingrédients :</strong></p>
        <p>{{ recipe.ingredients }}</p>
        <p><strong>Type :</strong> {{ recipe.type }}</p>
        <button @click="goBack" class="btn btn-secondary">Retour</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
import { useRecettetore } from '../../store/recetteStore';
  
  const store = useRecettetore();
  const route = useRoute();
  const router = useRouter();
  
  const index = route.params.index;
  const recipe = ref(null);
  
  onMounted(() => {
    recipe.value = store.getRecipe(index);
  });
  
  function goBack() {
    router.push({ name: 'recette' });
  }
  </script>
  