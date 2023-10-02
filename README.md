# Application de Gestion de Tableaux de Tâches

Cette application est une application de gestion de tableaux de tâches développée en utilisant React. Elle vous permet de créer, afficher et gérer des tableaux de tâches avec des listes de tâches individuelles.

## Composants

L'application est composée de plusieurs composants React pour gérer les différentes fonctionnalités.

### Composant AddTaskBoard

Le composant `AddTaskBoard` permet d'ajouter un nouveau tableau de tâches. Il dispose d'un champ de saisie pour entrer le nom du tableau, et d'un bouton pour ajouter le tableau à la liste.

### Composant TaskBoard

Le composant `TaskBoard` représente un tableau de tâches individuel. Il affiche le nom du tableau, permet d'ajouter de nouvelles tâches, de les afficher, de les éditer et de les supprimer. Vous pouvez également supprimer le tableau de tâches lui-même.

### Composant Task

Le composant `Task` représente une tâche individuelle dans un tableau de tâches. Il permet d'afficher les détails de la tâche, de l'éditer, de la sauvegarder, de l'annuler et de la supprimer.

### Composant TaskList

Le composant `TaskList` affiche la liste des tâches dans un tableau donné. Il affiche le nom du tableau et la liste des tâches associées.

## Fonctionnalités

L'application propose les fonctionnalités suivantes :

- Création de nouveaux tableaux de tâches.
- Ajout, édition et suppression de tâches dans chaque tableau.
- Sauvegarde des données dans le stockage local pour une utilisation persistante.

## Installation

Pour exécuter cette application localement, suivez les étapes suivantes :

1. Assurez-vous d'avoir Node.js et npm installés sur votre machine.
2. Ouvrez un terminal dans le répertoire racine du projet.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez `npm start` pour lancer l'application en mode développement.



