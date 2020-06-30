# Changelog (example)


## v2.3.1 (03/06/2020)

- Ajout d'une clause comparative sur la liste des contraintes d'accès à Inspire (si contient "pas de restriction d'accès à Inspire")
- Limiter l'autocomplétion à 30 éléments pour les emprises
- Correction d'un problème sur la gestion dataIdentifiers lors de la saisie et de la sauvagarde


## v2.3.0 (25/05/2020)

- Ajout d'un composant md-form-files pour ajouter des ressources associées à la fiche de MD (cf. composant mdedit-api pour la partie API)


## v2.2.0 (03/01/2020)

- Reprise des formulaires pour en conserver que 5:
    - Données géographiques (Inspire)
    - Données géographiques ouvertes (Inspire / Open data)
    - Données non géographiques
    - Données non géographiques ouvertes (Open data)
    - Cartes
- Ajout d'un assistant pour choisir le bon formulaire
- Adaptation de la page d'accueil
- Ajout de la possibilité de modifier les fichiers XML directement sur le serveur GéoGrandEst (cf. module mdedit2-api)
- Réorganisation de l'application sous forme de 2 modules:
    - mdedit2-ui: UI en JS
    - mdedit2-api: API PHP pour interragir avec les fichiers XMl sur le serveur GéoGrandEst
- Ajout d'un bouton de login/logout


## v0.0.3 (25/07/2018)

-   Ajout d'une vue de consultation des fiches "md-view-data"

## v0.0.2 (25/07/2018)

_No changelog for this release._

---

## v0.0.1 (24/07/2018)

#### Enhancements:

-   [#108](https://github.com/geograndest/mdedit2/issues/108) Create a silent mode
-   [#83](https://github.com/geograndest/mdedit2/issues/83) Create module initialisation panel

#### Bug Fixes:

-   [#122](https://github.com/geograndest/mdedit2/issues/122) Fix git configuration from `https`
-   [#119](https://github.com/geograndest/mdedit2/issues/119) Tags `all` takes a lot to exit the task

---
