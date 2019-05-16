# mdEdit 2

Outil simple et ouvert de saisie, modification et consultation de fiches de métadonnées conformes au format ISO 19139 / INSPIRE.

La présente documentation est adressée aux personnes souhaitant installer mdEdit et contribuer au projet.

Un [Guide d'utilisation de mdEdit](./documentation/userGuide/mdEdit_UserDocumentation.md) est également disponible.

**_La version de développement est la version `master`. Pour la dernière version stable, consulter la branche `stable`._**

## Fonctionnalités principales

- Création de fiches de métadonnées ISO/INSPIRE
- Modification de fiches de métadonnées ISO/INSPIRE
- Visualisation/consultation de fiches de métadonnées ISO/INSPIRE
- Import de fichiers au format XML ISO/Inspire
- Export de fichiers au format XML ISO/Inspire

**NB**: l'application mdEdit 2 ne propose pas de zone de stockage. Les fichiers vers lesquels pointe la fiche de métadonnées (miniature, documentation, données, etc.) doivent être stockés sur un serveur public (ex.: dropbox) pour ensuite être accessibles facilement.

## Installation de l'application

### Prérequis

Aucun prérequis n'est exigé pour installer mdEdit 2.

### Procédure

mdEdit ne nécessite pas d'installation particulière.
Il suffit de placer les fichiers contenus dans le dossier `build` sur un serveur web.

## Configuration

La configuration de mdEdit 2 se fait principalement via les fichiers contenus dans le répertoire [`config`](https://github.com/geograndest/mdedit2/tree/master/build/config).

## Utilisation

### Interface

L'interface a été conçue pour être simple et facilement utilisable par toute personne disposant d'un minimum de connaissance en terme de description de données géographiques.

Pou plus d'information concernant l'utilisation de l'application, merci de vosu référer au [Guide d'utilisation de mdEdit](./documentation/userGuide/mdEdit_UserDocumentation.md).

## Choix techniques et développement

Les choix sont réalisés afin que:

- L'application soit moderne dans son graphisme et ses fonctionnalités
- L'application reste légère et maintenable
- L'application n'impose pas d'exigences particulières pour l'installation et l'utilisation
- L'application puisse fonctionner en mode connecté et déconnecté
- L'application ne nécessite pas d'authentification (possibilité d'ajouter une authentification HTTP côté serveur si nécessaire)

### Langages utilisés

- JS, HTML et CSS côté interface utilisateur
- Markdown pour la documentation

### Principaux frameworks et bibliothèques utilisés

Attention: migration de Bootstrap 3 vers Bootstrap 4 lors du passage de la version 2.0 à 2.1 de mdEdit.

- [jquery](https://jquery.com/) - version 3.3.1
- [twitter bootstrap](http://getbootstrap.com/) - version 4.2.x
- [angular js](https://angularjs.org/) - version 1.7.x
- angularjs / ui router - version 1.0.x
- [ui-bootstrap4](https://morgul.github.io/ui-bootstrap4/) - version 3.0.x
- [showdown](https://github.com/showdownjs/showdown) - version 1.9.x
- xml-js - version 1.6.x
- lodash - verison 4.17.x
- lodash-uuid - version 0.0.3
- rename-keys - version 2.0.x
- jsonpath - version 1.0.x

_Pour plus de détails sur les versiond es librairies utilisées, consultez le fichier `package.json`._

## Contribution

### Installation de l'environnement de développement

Le développement de mdEdit 2 est principalement basé sur nodejs et webpack.
NodeJs doit être installé.

Cloner le dépôt GitHub:

```
git clone https://github.com/geograndest/mdedit2.git
cd mdedit2
```

Installer les modules

```
npm install
```

Lancer l'environnement de développement

```
npm run serve
```

Pour compiler le code (cf. dossier `build`)

```
npm run build
```