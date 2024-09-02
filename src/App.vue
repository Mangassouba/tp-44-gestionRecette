<script setup>

import { RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand"  :to="{name: 'Home'}">GestionRecette</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" aria-current="page" :to="{name: 'recette'}">Recette</router-link>
      </div>
    </div>
  </div>
</nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
