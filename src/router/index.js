import { createRouter, createWebHistory } from "vue-router";
import AjouteRecette from "@/views/recette/ajouteRecette.vue";
import ListeRecette from "@/views/recette/listeRecette.vue";
import Home from "@/views/Home.vue";
import ModifierRecette from "@/views/recette/modifierRecette.vue";
import ShowRecette from "@/views/recette/showRecette.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ajout",
    name: "ajouteRecette",
    component: AjouteRecette,
  },
  {
    path: "/recette",
    name: "recette",
    component: ListeRecette,
  },
  {
    path: "/mod/:index",
    name: "modifier",
    component: ModifierRecette,
  },
  {
    path: "/show/:index",
    name: "show",
    component: ShowRecette
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
