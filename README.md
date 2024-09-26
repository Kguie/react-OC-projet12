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


## Documentation

- Documentation disponible, réalisée avec Typedoc. Pour y accéder, installer typedoc `yarn add typedoc`, puis utiliser `npx typedoc` pour générer la documentation. Celle ci sera disponible dans le fichier '/docs', lancer le html présent avec live-server pour la consulter.


## Structure du Projet


-    └──  src
-          ├── assets          # Contient les images
-          │     └── icons/    # Contient les icônes au format svg
-          ├── components      # Contient les components
-          ├── pages           # Contient les pages
-          ├── utils           # Contient les utilitaires
-          │     ├── hooks/    # Contient les hooks
-          │     ├── skeleton/ # Contient le skeleton
-          │     └── style/    # Contient les fichiers sass
-          └── index.tsx       # Entrée


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

