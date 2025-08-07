# 🚀 Guide de Configuration Complète pour Render

## 📋 Variables d'Environnement Requises

Voici TOUTES les variables d'environnement que vous devez configurer sur Render :

### Variables Obligatoires

| Variable | Description | Exemple |
|----------|-------------|---------|
| `BOT_TOKEN` | Token de votre bot Telegram obtenu via @BotFather | `7637213437:AAEuUpvO9JJaFRfoqt7JN60Mlt2OGTlTNtE` |
| `ADMIN_ID` | Votre ID Telegram (utilisez @userinfobot pour l'obtenir) | `7670522278` |
| `MONGODB_URI` | URI de connexion MongoDB (MongoDB Atlas recommandé) | `mongodb+srv://username:password@cluster.mongodb.net/bot-telegram?retryWrites=true&w=majority` |

### Variables Automatiques (Render les génère)

| Variable | Description |
|----------|-------------|
| `PORT` | Port sur lequel l'application écoute (généré automatiquement par Render) |

### Variables Optionnelles

| Variable | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `NODE_ENV` | Environnement d'exécution | `production` |
| `WEBHOOK_URL` | URL de votre application Render (ajouté après déploiement) | `https://votre-app.onrender.com` |

## 🛠️ Étapes de Configuration sur Render

### 1. Préparer votre Repository GitHub

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers du bot
3. Assurez-vous que ces fichiers sont présents :
   - `bot-mongodb.js` (version polling)
   - `bot-webhook.js` (version webhook pour Render)
   - `config.js`
   - `models.js`
   - `keyboards.js`
   - `package.json`
   - `render.yaml`

### 2. Choisir le Mode de Déploiement

Vous avez deux options :

#### Option A : Mode Polling (Simple)
- Utilisez `bot-mongodb.js` comme fichier principal
- Type de service : Web Service
- Start Command : `node bot-mongodb.js`
- ⚠️ Note : Le bot peut être lent à répondre après inactivité

#### Option B : Mode Webhook (Recommandé pour Render)
- Utilisez `bot-webhook.js` comme fichier principal
- Type de service : Web Service
- Start Command : `node bot-webhook.js`
- ✅ Réponses plus rapides et économie de ressources

### 3. Configuration MongoDB

1. Créez un compte gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un cluster gratuit
3. Créez un utilisateur de base de données
4. Whitelist toutes les IPs : `0.0.0.0/0` (pour Render)
5. Récupérez votre URI de connexion

### 4. Déployer sur Render

1. Connectez-vous à [Render](https://render.com)
2. Cliquez sur "New +" → "Web Service"
3. Connectez votre repository GitHub
4. Configuration :
   - **Name** : `bot-telegram-lanation` (ou autre nom)
   - **Region** : Choisissez la plus proche
   - **Branch** : `main`
   - **Runtime** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `node bot-webhook.js` (ou `node bot-mongodb.js`)

5. Ajoutez les variables d'environnement dans la section "Environment"

### 5. Après le Déploiement

Si vous utilisez le mode webhook :

1. Copiez l'URL de votre service Render (ex: `https://bot-telegram-lanation.onrender.com`)
2. Ajoutez la variable `WEBHOOK_URL` avec cette URL
3. Le bot configurera automatiquement le webhook au redémarrage

## 📁 Structure des Fichiers

```
bot-telegram-lanation/
├── bot-mongodb.js      # Bot en mode polling (MongoDB)
├── bot-webhook.js      # Bot en mode webhook (pour Render)
├── bot.js              # Version alternative du bot
├── config.js           # Gestion configuration MongoDB
├── models.js           # Modèles MongoDB
├── keyboards.js        # Claviers Telegram
├── package.json        # Dépendances
├── render.yaml         # Configuration Render
└── .env.example        # Template variables d'environnement
```

## 🔧 Fonctionnalités du Bot

### Commandes Utilisateur
- `/start` - Menu principal avec :
  - Message de bienvenue personnalisé
  - Photo d'accueil (optionnel)
  - Boutons réseaux sociaux
  - Bouton informations
  - Mini application (optionnel)

### Commandes Admin
- `/admin` - Panel d'administration avec :
  - 📝 Modifier message d'accueil
  - 🖼️ Modifier photo d'accueil
  - 📱 Configurer mini application
  - 🌐 Gérer réseaux sociaux
  - ℹ️ Modifier informations
  - 📢 Envoyer message à tous
  - 👥 Gérer administrateurs
  - 📊 Voir statistiques

## ⚠️ Points Importants

1. **MongoDB** : Assurez-vous que votre URI MongoDB est correcte et que la base est accessible
2. **Token Bot** : Ne partagez JAMAIS votre token publiquement
3. **Admin ID** : Utilisez @userinfobot sur Telegram pour obtenir votre ID
4. **Webhook vs Polling** :
   - Webhook : Plus efficace pour Render, réponses rapides
   - Polling : Plus simple mais peut être lent après inactivité

## 🆘 Dépannage

### Le bot ne répond pas
1. Vérifiez les logs dans Render Dashboard
2. Assurez-vous que toutes les variables sont définies
3. Vérifiez la connexion MongoDB

### Erreur MongoDB
1. Vérifiez l'URI de connexion
2. Assurez-vous que l'IP 0.0.0.0/0 est whitelistée
3. Vérifiez les credentials

### Bot lent à répondre
- Sur le plan gratuit Render, le service se met en veille après 15 min d'inactivité
- Utilisez le mode webhook pour de meilleures performances

## 📝 Exemple de Configuration .env

```env
BOT_TOKEN=7637213437:AAEuUpvO9JJaFRfoqt7JN60Mlt2OGTlTNtE
ADMIN_ID=7670522278
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/telegram-bot?retryWrites=true&w=majority
NODE_ENV=production
```

## 🎯 Prochaines Étapes

1. Configurez toutes les variables d'environnement
2. Déployez sur Render
3. Testez avec `/start` et `/admin`
4. Personnalisez via le panel admin

---

**Note** : Ce bot est prêt à l'emploi avec toutes les fonctionnalités. Une fois déployé, utilisez `/admin` pour personnaliser complètement votre bot !