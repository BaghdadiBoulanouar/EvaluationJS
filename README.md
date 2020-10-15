# EvaluationJS

## Context
Differents exercices about JavaScript for school.

### Starting
* git clone https://github.com/BaghdadiBoulanouar/EvaluationJS.git
* open in the browser

### Structure
```bash
.
├── exercice-1
│   ├── index.html
│   └── index.js
├── exercice-2
│   ├── index.html
│   └── index.js
├── exercice-3
│   ├── index.html
│   └── index.js
├── exercice-4
│   ├── index.html
│   └── index.js
├── exercice-5
│   ├── index.html
│   └── index.js
├── exercice-6
│   ├── index.html
│   └── index.js
├── exercice-7
│   ├── index.html
│   └── index.js
└── README.md

```
### Tech
  Technology used:
    * HTML + HTML DOM
    * JS
### Exercice instruction (in French)
  * Exercice 1
  Créer une fonction “gridGenerator” prenant les arguments “xAxis” et “yAxis”. Vous devez générer une matrice en “table” html de x * y. Vous devrez colorer aléatoirement chaque case de la grille d’une couleur différente toutes les “1s” à “2s”.

  * Exercice 2
  Vous devez réaliser une barre de chargement. Cette barre de chargement devra comprendre deux parties, une partie colorée et une partie non colorée pour permettre de repérer le progression de la barre. Vous devrez créer la classe “drawBar” qui prendra deux arguments : “sum” pour la somme totale du nombre et “nbr” pour la proportion du segement chargé de la barre. La barre devra être responsive à “100%” par rapport à la taille totale de son conteneur HTML.
  
  * Exercice 3 (not finish)
  Réaliser le jeu du morpion avec une classe “MyMorpionXO”. Vous devez compter les points gagnés. Lorsqu’un des deux joueurs obtient 3 points la phrase “X/O a gagné la partie !” devra apparaître.

  * Exercice 4
  Vous devez intégrer cette world map à votre strucutre HTML. Le JavaScript devra générer la map suivante avec une méthode “renderWorldMap”. Source : https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg Vous devez permettre avec le survol de la souris de colorer en bleu chaque pays. Vous devez lors d’un clique colorer en rouge le pays ciblé. Vous devez également afficher le nom du pays survolé ou cliqué en bas de la carte comme une légende.
  
  * Exercice 5
  Vous devez réaliser un formulaire avec les champs : “nom”, “prénom”, “email”, “password”. Vous devez contrôler chaque champs à l’aide de la classe Regex (native à js). La validation du formulaire devra s’effectuer avec un bouton. Vous devez afficher les erreurs pour chaque champs. Pour construire une Regex utilisez : https://regexr.com/. L’intégralité du formulaire doit être en HTML. Vous devez indiquez les erreurs et la validation pour chaque champs.
  
  * Exercice 6
  A l’aide d’une fonction “checkPhoneNumber” vous devez renvoyer “true” si le numéro de téléphone correspond à un 06, 07 et 01. Vous devez utiliser les Regex.

  * Exercice 7
  Vous devez réaliser une fonction “computeNotes” qui prendra un tableau de notes exemple : “[10, 13, 13, 12, 15, 12, 11, 16, 14]”, vous devrez calculer la moyenne générale au retour de cette méthode.
  
  * Exercice 8 (not finish)
  Vous devrez créer une bataille navale en indiquant dans la matrice suivante la position des bateaux : “[[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]”. Lors d’un clique sur une des cases vous devez indiquer la couleur rouge si un bateau à été touché si non la couleur bleu. Vous devez également nommer chaque colonne avec des chiffres et chaque ligne avec des lettres. Un message “vous avez gagné” indiquera que vous avez gagné si tous les bateaux sont coulés. Vous devez aussi afficher à l’écran le nom des bateaux coulés. Exemple : “Porte avion, Frégate”.
  
  * Exercice 9 (not finish)
  Vous devrez réaliser la fonction “checkPalindrome” avec un argument “str”. Cette fonction devra renvoyer “true” si le mot ou la phrase peut être inversé et “false” si ce n’est pas le cas. Vous devez prendre en compte les mots et les phrases. Vous devez utiliser les boucles et aucune autres fonctions de JavaScript.

### FEATURES
* Exercice 1
  * Create a function GridGenerator (HTML DOM)
  * Create a function getRandomColor (for)
  * Create a function changeColor (for + setInterval)
* Exercice 2
  * Create a function drawBar (use HTML DOM <progress>)
* Exercice 3
  * Not finish yet
* Exercice 4
  * Create a function mapCreator (with SVG WorldMap)
  * Create a function mouseEvent when you interact with SVG elements
  * Create a function countryInformation to take name of Country with mouseEvent 
* Exercice 5
  * Create a function form (with HTML DOM)
  * Create a function check (used Regex to verify form information with Conditions)
* Exercice 6
  * Create a function form (with HTML DOM)
  * Create a function check (used Regex to check phoneNumber) 
* Exercice 7
  * Create a function form (with HTML DOM for enter number and create button)
  * Create a function sum (he add number on an Array) 
  * Create a function calculator (calculate average of all Array number)

### Author
[**BOULANOUAR Baghdadi**](https://github.com/BaghdadiBoulanouar) \ 