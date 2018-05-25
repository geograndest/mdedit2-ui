<!-- title: Aide -->

# cswReader - Documentation utilisateur (v.20180301)

cswreader est un outil simple et ouvert de consultation de catalogues de métadonnées conformes au format ISO 19139 / INSPIRE (flux CSW).

Cette application se veut facile d'usage. La présente documentation constitue un simple guide de prise en main.

## Fonctionnalités principales

cswReader permet :

- La consultation de flux CSW de métadonnées ISO/INSPIRE sous forme de grille et de liste
- La recherche de fiches de métadonnées ISO/INSPIRE
- La consultation d'une fiche de métadonnées ISO/INSPIRE spécifique

## Se connecter à cswReader

cswReader ne nécessite pas d'authentification pour fonctionner.

## Page d'accueil

La page d'accueil présente l'application ainsi que la liste des catalogues consultables.

![home.jpg](img/home.jpg)


## Description de l'interface utilisateur

Après avoir sélectionné un catalogue la page principale de l'application s'affiche.

! [screen_cswreader.jpg](img/screen_cswreader.jpg)

L'interface utilisateur offre les possibilités suivantes:
- Affichage du nombre de résultats
- Changer de langue
- Générer un permalien
- Changer de vue
- Consulter une fiche de métadonnées spécifique
- Changer de catalogue (flux CSW)
- Filtrer les résultats

_[A compléter]_


## Détail des principales fonctionnalités

### Filtrer la liste des résultats

### Visualiser/consulter une fiche de métadonnées

_[A compléter]_

### Changer de vue

L'application permet de permuter entre la vue "grille" et la vue "liste" en utilisant els boutons xxx de la barre de menu.

_[A compléter]_


### Changer de catalogue (flux CSW)

! [screen_cswreader.jpg](userGuideImages/screen_cswreader.jpg)

_[A compléter]_

### Changer la langue de l'interface

Le bouton ![bt_lang.jpg](userGuideImages/bt_lang.jpg) en bas à droite de l'écran propose une liste des langues disponibles pour l'interface. Il vous suffit de choisir celle qui vous convient.

### Générer un permalien

Le bouton ![bt_link.jpg](userGuideImages/bt_link.jpg) en bas à droite de l'écran permet d'obtenir un permalien.
Le permalien permet de préciser:

- la vue à afficher
- si le menu d'en-tête doit être affiché
- si le pied de page doit être affiché
- la langue
- le catalogue à afficher (flux CSW)
- les éléments de recherche (mot et type de recherche)
- un fichier de configuration générale spécifique
- une fichier de liste de catalogue spécifique

_[A compléter]_








<!-- title: Aide -->

# Catalogue des observatoires

_Version: 20180130_

Le catalogue des observatoires réalisé par la Région Grand Est est un outil simple de consultation de l'inventaire des centres de ressources identifiés et utilisés par les services de la collectivité.

Cette application se veut facile d'usage. La présente documentation constitue un simple guide de prise en main.

## Fonctionnalités principales

L'application permet :

- La consultation du catalogue des observatoires
- La recherche d'observatoires et le filtre selon différents critères
- La consultation de la fiche d'un observatoire spécifique


## Se connecter à l'observatoire

Cette application ne nécessite pas d'authentification. Il vous suffit de vous rendre à l'adresse https://xxx **[A adapter]** pour accéder à l'application.


## Description de l'interface utilisateur

### La page d'accueil

La page d'accueil de l'application décrit l'objectif de l'inventaire.
Pour vous rendre sur catalogue, cliquez sur le bouton "Catalogue général" en bas de page.
Vous pouvez également arriver sur une présélection des observatoires par thématiques en cliquant sur les liens correspondants.

![home.jpg](img/help/home.jpg)


### Le catalogue

Le catalogue liste l'ensemble des fiches disponibles organisées par thèmes.
Le nombre total de fiche et celui des fiches visibles (selon filtre et recherche) est présenté en bas de page sous la forme: ![stats.jpg](img/help/stats.jpg)

Pour afficher le détail d'un observatoire, il suffit de cliquer sur la fiche correspondante.

Il est possible d'effectuer une recherche et filtrer les résultats par thématique (cf. "Détail des fonctionnalités de filtre et de recherche")

Les autres boutons de l'interface sont:
- ![help.jpg](img/help/btn_help.jpg) : afficher la présente fenêtre d'aide
- ![home.jpg](img/help/btn_home.jpg) : revenir à la page d'accueil
- ![views.jpg](img/help/btn_views.jpg) : changer l'affichage du catalogue (passer de la vue "grille" à la vue "liste")

La copie d'écran suivante présente la catalogue général (sans filtre ni recherche).

![catalog.jpg](img/help/catalog.jpg)


### La fiche détaillée

Lorsque que l'on clique sur une imagette dans le catalogue, la fiche détaillé s'ouvre.
Pour fermer la fiche, utilisez le bouton ![close.jpg](img/help/btn_close.jpg)
Vous pouvez également imprimer la fiche pour en disposer au format ou l'enregistrer au format PDF (sélectionnez "Microsoft print to PDF" dans la liste des imprimantes), grâce au bouton ![print.jpg](img/help/btn_print.jpg).

![fiche.jpg](img/help/fiche.jpg)


## Détail des fonctionnalités de filtre et de recherche

### Filtrer la liste des réusltats

Cette fonctionnalité permet de n'afficher que les résultats relatifs à un thème.

Pour cela vous pouvez soit:
- A partir de la page d'accueil, sélectionner le lien concernant le thème qui vous intéresse,
- A partir du catalogue général,
    - Cliquer sur l'en-tête du thème en haut de chaque section 
    - Ou cliquer sur l'étiquette qui apparaît en bas de chaque fiche 

Une fois un thème sélectionné, une croix apparaît à l'extrémité droite du titre de la section concernée (cf. copie d'écran ci-dessous).
Elle permet de sésactiver le filtre.

![catalog-theme-amenagement.jpg](img/help/catalog-theme-amenagement.jpg)


### Rechercher un ensemble de fiches

Cette fonctionnalité permet de lister les fiches répondant à un critère particulier.
Pour cela, vous devez utiliser le formulaire suivant:

![search.jpg](img/help/search.jpg)

Par défaut, la recherche se fait sur l'ensemble du contenu de la fiche.

**_Attention: la recherche est sensible à la "casse" (différence entre minuscule et majuscules, ainsi qu'à la présenc eou non d'accent._**

Par exemple, la copie d'écran suivante présente le résultat d'une recherche effectuée sur le terme "economie".

![catalog-search-economie.jpg](img/help/catalog-search-economie.jpg)


### Combiner la recherche et le filtre sur un thème

Il est possible de réaliser une recherche et n'afficher que les résultats relatifs à un thème particulier.
Pour cela, il vous suffit de combiner les 2 fonctionnalité sprécédente.
L'a copie d'écran suivante présente les fiches contenant le terme `economie` et appartenant à la thématique `amenagement`.

![catalog-search-economie-theme-environnement.jpg](img/help/catalog-search-economie-theme-environnement.jpg)