# Configuration de l'environnement de développement pour Ionic, Vue.js et NestJS

## Pré-requis

- Node.js et npm : [Télécharger Node.js](https://nodejs.org/)
- Git : [Télécharger Git](https://git-scm.com/)
- Java Development Kit (JDK) : [Télécharger le JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Android Studio : [Télécharger Android Studio](https://developer.android.com/studio)

## 1. Cloner le Projet

Cloner le dépôt contenant les projets backend, frontend web et mobile.

```bash
git clone <URL_DU_DÉPÔT>
cd <RÉPERTOIRE_DU_PROJET>
```

## 2. Configuration du Backend avec NestJS

### a. Naviguer vers le Répertoire Backend

``` bash
cd backend
```

### b. Installer les dépendances

``` bash
npm install
```

### c. Démarrer le serveur
``` bash
npm run start:dev
```


## 3. Configuration de l'Application Web avec Vue.js

### a. Naviguer vers le Répertoire Frontend Web

``` bash
cd ../admin-app
```

### b. Installer les Dépendances

``` bash
npm install
```


### c. Démarrer le Serveur de Développement
``` bash
npm run serve
```


## 4. Configuration de l'Application Mobile avec Ionic et Vue

### a. Naviguer vers le Répertoire Mobile

``` bash
cd ../mobile-app
```

### b. Installer les Dépendances
``` bash
npm install
```



### c. Configurer Android Studio et les Outils Android

1. **Télécharger et Installer Android Studio** :
    
    - [Téléchargez Android Studio](https://developer.android.com/studio) et suivez les instructions d'installation.
    - Pendant l'installation, assurez-vous d'installer le SDK Android, les outils de construction et le gestionnaire de l'AVD (Android Virtual Device).
2. **Configurer les Variables d'Environnement Android** :
    
    - **ANDROID_HOME** :
        - Trouvez le chemin d'installation du SDK Android (par exemple, `C:\Users\<YourUsername>\AppData\Local\Android\Sdk`).
        - Ajoutez `ANDROID_HOME` aux variables d'environnement :
            - Nom de la variable : `ANDROID_HOME`
            - Valeur de la variable : Chemin vers le répertoire du SDK Android.
    - **Ajoutez les outils Android au `PATH`** :
        - Ajoutez les chemins suivants au `PATH` :
            - `%ANDROID_HOME%\tools`
            - `%ANDROID_HOME%\tools\bin`
            - `%ANDROID_HOME%\platform-tools`

### d. Vérifier les Configurations

1. **Ouvrez une nouvelle fenêtre de commande** et exécutez les commandes suivantes pour vérifier les configurations :
    
``` bash
echo %JAVA_HOME% 
echo %ANDROID_HOME% 
java -version 
adb --version 
```

### e. Relancez la Construction et l'Exécution de l'Application

1. **Retournez dans le répertoire de votre projet Ionic** et relancez la commande pour exécuter l'application sur Android :

``` bash
ionic capacitor run android
```
    