# CryptoBankApp 🚀

**CryptoBankApp** est une application mobile qui permet aux utilisateurs de suivre à la fois leurs comptes bancaires 💳 et leurs actifs en cryptomonnaie 🪙. L'application regroupe plusieurs fonctionnalités avancées, telles que l'affichage des soldes et transactions bancaires, la consultation des prix des cryptomonnaies en temps réel, l'analyse des dépenses bancaires pour proposer des investissements, et bien plus encore.

## Fonctionnalités principales ⚡

### 1. **Connexion aux comptes bancaires** 💳
   - Utilisation de l'API BNP Paribas pour récupérer :
     - Le solde actuel des comptes bancaires.
     - Les transactions récentes effectuées.
     - Analyse des dépenses bancaires pour recommander des investissements en cryptomonnaie.

### 2. **Intégration avec une API crypto** 🪙
   - Intégration avec des APIs comme **CoinGecko**, **CoinMarketCap**, et **Binance** pour récupérer :
     - Les prix en temps réel des cryptomonnaies (Bitcoin, Ethereum, etc.).
     - Les variations des marchés.
     - L'historique des prix des cryptomonnaies.
     - Récupérer les soldes en cryptomonnaie de l'utilisateur et ses dernières transactions sur Binance.

### 3. **Affichage d'un tableau de bord** 📊
   - Regroupement des informations des comptes bancaires et des cryptomonnaies dans une interface claire et intuitive :
     - Affichage du solde total (banque + cryptomonnaies).
     - Détails des actifs, y compris les cryptommunnaies et les devises fiat.
     - Graphiques illustrant l'évolution de la valeur totale (fiat + crypto).
     - Présentation des recommandations d'investissement en cryptomonnaie basées sur l'analyse des dépenses bancaires.

### 4. **Calculateur de conversion fiat/crypto** 🔄
   - Permet aux utilisateurs de simuler des conversions entre fiat et crypto (par exemple, convertir 100€ en BTC).

### 5. **Alertes personnalisées 🔔**
   - Notifications lorsque :
     - Une cryptomonnaie dépasse un seuil de prix défini par l'utilisateur.
     - Une dépense importante est effectuée sur un compte bancaire.
     - Des opportunités d'investissement en crypto sont identifiées en fonction de l'analyse des dépenses.

### 6. **Analyse des dépenses et recommandations d'investissement** 💼
   - L'application analyse les habitudes de dépenses bancaires de l'utilisateur pour identifier des opportunités d'investissement en fonction du marché des cryptomonnaies. Par exemple, si un utilisateur a une dépense régulière en ligne, l'application pourrait suggérer d'investir une petite partie de ses revenus dans une cryptomonnaie performante.

### 7. **Sécurité 🔐**
   - Authentification via OAuth2 pour l'API BNP Paribas, garantissant la sécurité des données bancaires.
   - Stockage sécurisé des clés API pour les cryptomonnaies et des informations sensibles.

## Technologies utilisées 🛠️

- **Backend** :
  - Node.js avec Express pour la gestion des routes API.
  - Sequelize pour la gestion des bases de données avec l'intégration de l'API BNP Paribas et des APIs crypto.
  - JWT pour la gestion de l'authentification et de la sécurité.
  - Intégration avec l'API **Binance** pour récupérer le solde en crypto de l'utilisateur et ses dernières transactions.

- **Frontend** :
  - **React Native** pour le développement mobile multiplateforme, permettant à l'application de fonctionner sur iOS et Android.
  - Graphiques et tableaux de bord avec des librairies comme **Victory Native** ou **React Native Chart Kit**.

- **API** :
  - **API BNP Paribas** pour accéder aux informations bancaires des utilisateurs.
  - **CoinGecko** ou **CoinMarketCap** pour récupérer les prix et les historiques des cryptomonnaies.
  - **API Binance** pour récupérer le solde en cryptomonnaie de l'utilisateur et ses dernières transactions.

- **Sécurité** :
  - OAuth2 pour l'authentification sécurisée avec les services tiers.
  - JWT pour gérer l'authentification des utilisateurs au sein de l'application.
  - **Analyse des dépenses bancaires** pour fournir des recommandations personnalisées d'investissement en crypto.

## Installation 💻

### Prérequis 🔑
- Node.js (version 14 ou supérieure)
- npm ou yarn
- React Native CLI (si vous travaillez avec un projet React Native)

### Étapes d'installation 🚀

1. Clonez le dépôt de l'application :
   ```bash
   git clone https://github.com/votre-utilisateur/CryptoBankApp.git
   cd CryptoBankApp

2. Installez les dépendances pour le backend :
   ```bash
   cd backend
   npm install

3. Installez les dépendances pour le frontend :
   ```bash
   cd ../frontend
   npm install

4. Configurez les variables d'environnement pour les clés API (BNP Paribas, CoinGecko, Binance, etc.) dans le fichier .env :
   ```bash
   API_KEY_BNP_PARIBAS=your_bnp_paribas_api_key
   API_KEY_CRYPTO=your_crypto_api_key
   API_KEY_BINANCE=your_binance_api_key
   JWT_SECRET=your_jwt_secret_key

5. Lancez le backend :
   ```bash
   cd backend
   npm start

6. Lancez le frontend :
   ```bash
   cd frontend
   npm start

## Utilisation 📱

### Inscription et Connexion :
- Les utilisateurs peuvent s'inscrire via un formulaire et se connecter avec leurs identifiants sécurisés.
- Une fois connectés, ils accèdent à leur tableau de bord où sont affichées toutes les informations financières pertinentes.

### Consulter les soldes et transactions bancaires :
- Une fois connecté, l'utilisateur peut visualiser les soldes de ses comptes bancaires ainsi que les transactions récentes.
- Des recommandations d'investissement basées sur les habitudes de dépenses sont également proposées.

### Suivi des cryptomonnaies :
- Les utilisateurs peuvent voir la valeur de leurs cryptomonnaies en temps réel et consulter l'historique des prix.
- Ils peuvent également voir le solde de leurs cryptomonnaies dans leur compte Binance et consulter les dernières transactions.

### Alertes :
- Les utilisateurs peuvent définir des alertes pour être notifiés lorsqu'une cryptomonnaie dépasse un prix seuil ou lorsqu'une transaction importante est effectuée.

## Sécurité 🔐
- **Authentification OAuth2** pour garantir la sécurité des informations bancaires des utilisateurs avec l'API BNP Paribas.
- **JWT** pour gérer l'authentification des utilisateurs au sein de l'application.
- **Stockage sécurisé** des clés API dans des variables d'environnement pour éviter toute fuite de données sensibles.
- **Analyse des dépenses bancaires** pour proposer des recommandations personnalisées en matière d'investissement en cryptomonnaie.

## Contribution 💬
Si vous souhaitez contribuer au projet, veuillez suivre les étapes suivantes :

1. Forkez ce repository.
2. Créez une nouvelle branche (`git checkout -b feature-xyz`).
3. Faites vos modifications.
4. Committez vos changements (`git commit -am 'Add new feature'`).
5. Poussez votre branche (`git push origin feature-xyz`).
6. Ouvrez une pull request.

## License 📜
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

