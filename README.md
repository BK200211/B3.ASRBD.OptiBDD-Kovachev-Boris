# Projet : Administration et optimisation des données

## Fonctionnalités

- Récupération de tous les films
- Ajout, modification, suppression d'un film
- Récupérer des avis liés aux films
- Ajouter, modifier et supprimer des commentaires

## Technologies Utilisées

- **Next.js**: Framework React pour le côté serveur
- **MongoDB**: Base de données NoSQL utilisée pour stocker les films et les commentaires
- **Swagger**: Documentation de l'API générée automatiquement

## Installation

1. Cloner le repository :

   ```bash
   git clone https://github.com/BK200211/B3.ASRBD.OptiBDD-Kovachev-Boris.git

1. Installer les dépendances :

   ```bash
   cd B3.ASRBD.OptiBDD-Kovachev-Boris
   npm install

1. Définissez les variables d'environnement : créez le fichier .env.local dans le répertoire racine du projet et définissez les variables d'environnement suivantes :

   ```bash
   MONGODB_URI=URL_DE_VOTRE_BASE_DE_DONNÉES_MONGODB

1. Démarrer l'application en mode développement :

   ```bash
   npm run dev


## Les problèmes rencontrés
Voici une liste des problèmes rencontrés :

Module introuvable (../../lib/mongodb) : L'importation du module MongoDB n'a pas été résolue correctement dans le fichier API.
Erreurs de compilation Next.js : certains fichiers API génèrent des erreurs de compilation en raison de problèmes d'importation ou de configuration.
J'ai essayé de me vanter, mais en vain.

## Auteur
Boris Kovachev B3 ASRBD
