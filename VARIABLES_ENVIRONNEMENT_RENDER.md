# 🔐 Variables d'Environnement pour Render

## Variables à Configurer sur Render

Copiez et collez ces variables dans la section "Environment" de votre service Render :

### 1. BOT_TOKEN (Obligatoire)
```
BOT_TOKEN=VOTRE_TOKEN_ICI
```
- Obtenez-le via @BotFather sur Telegram
- Format : `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

### 2. ADMIN_ID (Obligatoire)
```
ADMIN_ID=VOTRE_ID_TELEGRAM
```
- Obtenez votre ID via @userinfobot sur Telegram
- Format : Nombre (ex: `7670522278`)

### 3. MONGODB_URI (Obligatoire)
```
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE?retryWrites=true&w=majority
```
- Créez un compte gratuit sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Remplacez USERNAME, PASSWORD, CLUSTER et DATABASE par vos valeurs

### 4. NODE_ENV (Optionnel)
```
NODE_ENV=production
```
- Valeur recommandée : `production`

### 5. WEBHOOK_URL (Pour mode webhook uniquement)
```
WEBHOOK_URL=https://VOTRE-APP.onrender.com
```
- Ajoutez cette variable APRÈS le déploiement
- Utilisez l'URL fournie par Render

## 📌 Exemple Complet

Voici un exemple avec des valeurs fictives :

```
BOT_TOKEN=7637213437:AAEuUpvO9JJaFRfoqt7JN60Mlt2OGTlTNtE
ADMIN_ID=7670522278
MONGODB_URI=mongodb+srv://botuser:motdepasse123@cluster0.xxxxx.mongodb.net/telegram-bot?retryWrites=true&w=majority
NODE_ENV=production
WEBHOOK_URL=https://bot-telegram-lanation.onrender.com
```

## ⚠️ Important

- **Ne partagez JAMAIS** ces valeurs publiquement
- **Vérifiez** que MongoDB accepte les connexions depuis n'importe quelle IP (0.0.0.0/0)
- **PORT** est généré automatiquement par Render, ne le définissez pas

## 🚀 Mode de Démarrage

Dans Render, utilisez l'une de ces commandes de démarrage :

- **Mode Webhook** (Recommandé) : `node bot-webhook.js`
- **Mode Polling** (Simple) : `node bot-mongodb.js`