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

## Description de l'interface utilisateur

### La page d'accueil

La page d'accueil présente l'application ainsi que la liste des catalogues consultables.

![home.jpg](img/help/home.jpg)

### Le catalogue

Le catalogue liste l'ensemble des fiches disponibles.
Le nombre total de fiche et celui des fiches visibles (selon filtre et recherche) est présenté en bas de page sous la forme: ![stats.jpg](img/help/stats.jpg)

Pour afficher le détail d'une fiche, il suffit de cliquer sur la fiche correspondante.

Il est possible d'effectuer une recherche et filtrer les résultats (cf. "Détail des fonctionnalités de filtre et de recherche"):
![search.jpg](img/help/search.jpg)

Les autres boutons de l'interface sont:
- ![btn_help.jpg](img/help/btn_help.jpg) : afficher la présente fenêtre d'aide
- ![btn_home.jpg](img/help/btn_home.jpg) : revenir à la page d'accueil
- ![btn_views.jpg](img/help/btn_views.jpg) : changer l'affichage du catalogue (passer de la vue "grille" à la vue "liste")
- ![btn_catalog.jpg](img/help/btn_catalog.jpg) : changer de catalogue
- ![btn_lang.jpg](img/help/btn_lang.jpg) : changer de lang

La copie d'écran suivante présente la page principale du catalogue.

![catalog.jpg](img/help/catalog.jpg)

### La fiche détaillée

Lorsque que l'on clique sur une fiche du catalogue, la vue détaillée s'ouvre.
Pour fermer la fiche, utilisez le bouton ![close.jpg](img/help/btn_close.jpg)
Vous pouvez également imprimer la fiche pour en disposer au format papier ou l'enregistrer au format PDF (sélectionnez "Microsoft print to PDF" par exemple dans la liste des imprimantes), grâce au bouton ![print.jpg](img/help/btn_print.jpg).

![fiche.jpg](img/help/metadata.jpg)

Si la fiche conteint un lien WFS permettant le téléchargement des données, des boutons avec les formats téléchargeables s'affichent de la façon suivante (fonctionnalité expérimentale).

![wfs-linkages.jpg](img/help/wfs-linkages.jpg)

## Détail des fonctionnalités de filtre et de recherche

Cette fonctionnalité permet de lister les fiches répondant à un critère particulier.
Pour cela, vous devez utiliser le formulaire suivant:

![search.jpg](img/help/search.jpg)

Par défaut, la recherche se fait sur l'ensemble du contenu de la fiche.