# 🔐 Variables d'Environnement Configurées pour Render

## Copiez-collez ces variables EXACTEMENT dans Render :

### 1. BOT_TOKEN
```
8128299360:AAEWmbRLjkTaQYP17GsiGm5vhQv8AcJLKIY
```

### 2. ADMIN_ID
```
7670522278
```

### 3. MONGODB_URI
```
mongodb+srv://lmvrtt2:ALcWY4mLHwvtz1X2@lmvrtt.km9x4q9.mongodb.net/telegram-bot?retryWrites=true&w=majority&appName=LMVRTT
```

### 4. NODE_ENV
```
production
```

## 📋 Configuration sur Render

1. **Dans votre service Render**, allez dans l'onglet "Environment"
2. **Ajoutez chaque variable** avec le nom et la valeur ci-dessus
3. **NE PAS ajouter PORT** - Render le génère automatiquement

## 🚀 Commande de démarrage

Dans les settings de Render, utilisez :
- **Start Command** : `node bot-webhook.js`

## ⚠️ WEBHOOK_URL (à ajouter APRÈS déploiement)

Une fois votre bot déployé, Render vous donnera une URL comme :
`https://bot-telegram-lanation-xxxx.onrender.com`

Ajoutez alors cette variable :
```
WEBHOOK_URL=https://votre-url-render.onrender.com
```

## 🔒 Sécurité

**IMPORTANT** : Ces informations sont sensibles !
- Ne les partagez jamais publiquement
- Ne les committez pas sur GitHub
- Utilisez uniquement les variables d'environnement Render

## ✅ Vérification

Votre bot Telegram : @jsjshsheejdbot
- Commande utilisateur : `/start`
- Commande admin : `/admin` (accessible uniquement à vous)

---

**Tout est configuré et prêt pour le déploiement !**