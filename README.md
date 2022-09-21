# Exercices

## Observable

En utilisant le constructeur de la classe `Observable`, créer une fonction `countdown` qui reçoit en paramètre `nb` de type `number` et retourne un type `Observable`.

Cette fonction devra afficher et décrémenter `nb` chaque seconde (en utilisant `setInterval`) jusqu'à afficher `0`, l'observable sera alors complete.

Marble Graph (1 tiret vaut 250ms) :

```
countdown(3) :
----3----2----1----0|
```

## Opérateurs

Réécrire cette fonction en utilisant la fonction de création `interval` et les opérateurs `map` et `take`.

Ajouter un composant avec un bouton qui affiche Start et lance le countdown
