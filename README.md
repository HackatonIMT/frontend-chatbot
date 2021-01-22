# Frontend Hackaton

Frontend pour le chatbot TOBI.
## Conditions préalables

- Node.js : Angular nécessite une version [LTS actuelle, active ou de maintenance](https://nodejs.org/about/releases) de Node.js.
- gestionnaire de paquets npm : Angular, la CLI Angular et les applications Angular dépendent des paquets npm pour de nombreuses caractéristiques et fonctions. Pour vérifier que vous avez installé le client npm, lancez npm -v dans une fenêtre de terminal. Pour l'installer, allez [ici](https://docs.npmjs.com/cli/install).
- Angular CLI : nécessaire pour le développement. Elle peut être installée avec la commande `npm install -g @angular/cli`.

Source et plus d'informations : [Guide d'installation angulaire](https://angular.io/guide/setup-local)
## Serveur de développement

Lancez `ng serve` pour un serveur de développement. Naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Génération de code

Exécutez `ng generate component component-name` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Exécutez "construire" pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist/`. Utilisez le drapeau `--prod` pour un build de production.

## Exécution des tests unitaires

Exécutez "ng test" pour exécuter les tests unitaires via [Karma] (https://karma-runner.github.io).

## Exécution des tests de bout en bout

Exécutez `ng e2e` pour exécuter les tests de bout en bout via [Protractor] (http://www.protractortest.org/).

## Aide complémentaire

Pour obtenir plus d'aide sur l'interface de commande angulaire, utilisez la rubrique "Aide" ou consultez la page [Angular CLI Overview and Command Reference] (https://angular.io/cli).

our obtenir plus d'aide sur l'interface de commande Angular, utilisez la rubrique "Aide" ou consultez la page [Angular CLI Overview and Command Reference] (https://angular.io/cli).

## Exécution avec Docker

* Construire le projet pour développement

```terminal
sudo docker build -t angular . --build-arg ENV=dev
```

* Construire le projet pour production

```terminal
sudo docker build -t angular . --build-arg ENV=production
```

* Excecuter le conteneur

```terminal
sudo docker run -ti --init -p 8080:80 -e PORT=80 angular
```

