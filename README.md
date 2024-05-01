# Projet API Films

Ce projet est une API basée sur Next.js pour gérer des films et leurs commentaires associés.

## Fonctionnalités

- Récupération de tous les films
- Ajout, modification, suppression d'un film
- Récupération des commentaires liés à un film
- Ajout, modification, suppression d'un commentaire

## Technologies Utilisées

- **Next.js**: Framework React pour le côté serveur
- **MongoDB**: Base de données NoSQL utilisée pour stocker les films et les commentaires
- **Swagger**: Documentation de l'API générée automatiquement

## Installation

1. Cloner le repository :

   ```bash
   git clone https://github.com/votre-nom/projet-api-films.git

1. Installer les dépendances :

   ```bash
   cd projet-api-films
   npm install

1. Définir les variables d'environnement :Créez un fichier .env.local à la racine du projet et définissez les variables d'environnement suivantes :

   ```bash
   MONGODB_URI=URL_DE_VOTRE_BASE_DE_DONNÉES_MONGODB

1. Démarrer l'application en mode développement :

   ```bash
   npm run dev

## Documentation de l'API
   ```bash
    npm run dev
   ```
Pour consulter la documentation de l'API, rendez-vous sur http://localhost:3000/api/doc une fois l'application démarrée.

## Problèmes Rencontrés
Voici une liste des problèmes rencontrés lors du développement de ce projet :

Module non trouvé (../../lib/mongodb) : L'import du module MongoDB n'était pas résolu correctement dans les fichiers API.
Erreurs de compilation Next.js : Certains fichiers API ont généré des erreurs de compilation en raison de problèmes d'import ou de configuration.

## Auteur
Boris Kovachev B3 ASRBD
