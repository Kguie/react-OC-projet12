# SportSee #

 Ce projet correspond au projet 12 de la formation développeur d'applications JS React de OPENCLASSROOMS.


 ## Table des Matières

- [Introduction](#introduction)
- [Installation et utilisation](#installation-et-utilisation)
- [Documentation](#documentation)
- [Structure du Projet](#structure-du-projet)
- [Auteurs](#auteurs)
- [Outils et contraintes techniques](#outils-et-contraintes-techniques) 


## Introduction

- L'objectif ici est de démarrer le projet React et développer la page de profil de SportSee, les composants React, les graphiques, en suivant les maquettes Figma (https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1).


## Installation et utilisation

- Installation des dépendances : Cloner ce repository et lancer `yarn install` pour installer les dépendances puis démarrer avec `yarn start`.
- `yarn build` construit l'application pour la production dans le dossier `build`.\
- `yarn eject` supprimera la dépendance de build unique de votre projet. 


## Documentation

- Disponible en HTML dans /docs.

## Structure du Projet

- src/
- ├── assets/              # Ressources statiques telles que les images et icônes
- │   ├── icons/           # Icônes SVG réutilisables dans les composants
- │   └── ...              # Autres ressources comme les polices, logos, etc.
- │
- ├── components/          # Composants réutilisables à travers l'application
- │
- ├── pages/               # Pages principales de l'application (correspond à chaque route)   
- │
- ├── utils/               # Fonctions utilitaires et helpers
- │   ├── hooks/           # Hooks personnalisés pour gérer l'état ou les effets
- │   ├── skeleton/        # Squelettes de chargement ou placeholders
- │   └── style/  
- │
- ├── index.tsx            # Point d'entrée de l'application React
- └── App.tsx              # Composant racine définissant la structure de l'application

## Auteurs

- [GUIEBA Kévin](https://github.com/Kguie/)


### Outils et contraintes techniques ###

- Create React App.

- Découpage en composants modulaires et réutilisables .
- Utiliser D3 ou Recharts pour les graphiques.
- Le projet doit être lisible sur les écrans d’au moins 1024 par 780 pixels.

- Utiliser Fetch ou Axios pour réaliser les calls API.
- Réaliser les calls en dehors des composants React.

- Documenter le projet.

