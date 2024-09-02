
# Application de Gestion de Recettes

## Description

L'application de gestion de recettes permet aux utilisateurs d'ajouter, modifier, supprimer et afficher des recettes de cuisine.
l'application a été developpeée en utilisant vuejs 3 avec la compostion  API et pinia et bootstrap pour styliser l'interface utilisateur et doit etre deployée sur vercel, conteneurisée avec Docker, et publiée sur Docker Hub.

## Fonctionnalités

- Ajout de Recettes : Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant le titre, les ingrédients, et le type de recette

- Modification de Recettes : Les utilisateurs peuvent modifier les recettes existantes.

- Suppression de Recettes : Les utilisateurs peuvent supprimer des recettes de la liste.

- Affichage de la Liste des Recettes : Une page permet de visualiser toutes les recettes

- Déploiement sur Vercel : L'application peut être déployée directement sur Vercel pour un accès en ligne.

- Conteneurisation avec Docker : Une image Docker de l'application peut être construite et poussée sur Docker Hub.

## Prérequis

- vuejs3
- Git
- Docker

## Installation

- Clonez le repository :

        https://github.com/Mangassouba/tp-44-gestionRecette.git

- Installez les dépendances :

        npm install

- Lancez l'application en mode développement :

        npm run dev

## Conteneurisation avec Docker

- Créez un fichier Dockerfile à la racine du projet :

        FROM node:16-alpine AS build

        WORKDIR /app

        COPY package.json package-lock.json ./

        RUN npm install

        COPY . .

        RUN npm run build

        FROM nginx:alpine

        COPY --from=build /app/dist /usr/share/nginx/html

        EXPOSE 80

        CMD ["nginx", "-g", "daemon off;"]

- Construisez l'image Docker :

        docker build -t gestion_recette .

- Exécutez le conteneur :

        docker run -d -p 3000:80 gestion_recette

- Accédez à l'application via http://localhost:3000.

## Publication sur Docker Hub

- Connectez-vous à Docker Hub :

        docker login

- Taggez votre image :

        docker tag gestion_recette:latest mangassouba15/gestion_recette:latest

- Poussez l'image sur Docker Hub :

        docker push mangassouba/gestion_recette


## Auteur
Hama Houllah Mangasouba

https://github.com/Mangassouba