# 🚨 INSTRUCTIONS POUR CORRIGER L'ERREUR RENDER

## Étapes à suivre sur Render.com :

1. **Connectez-vous à votre Dashboard Render**
   - https://dashboard.render.com

2. **Cliquez sur votre service** `telegram-bot-lanation`

3. **Allez dans l'onglet "Settings"**

4. **Dans la section "Build & Deploy"**, trouvez **"Start Command"**

5. **Changez la commande** :
   - ❌ Ancienne : `node bot-webhook.js`
   - ✅ Nouvelle : `node bot-mongodb.js`

6. **Cliquez sur "Save Changes"**

7. **Render va automatiquement redéployer**

## ✅ Pourquoi ça va fonctionner :

- `bot-mongodb.js` utilise uniquement les modules déjà installés
- Pas besoin de `fs-extra`
- Inclut un serveur HTTP pour Render
- Utilise MongoDB pour la persistance

## 📝 Commandes alternatives si besoin :

Si `node bot-mongodb.js` ne fonctionne pas, essayez :
1. `node start.js`
2. `npm start`

## 🎉 Résultat attendu :

Après le redéploiement, vous devriez voir dans les logs :
- ✅ Connecté à MongoDB
- 🌐 Serveur HTTP démarré sur le port 10000
- 🤖 Bot démarré avec succès !

Votre bot sera accessible sur Telegram : @jsjshsheejdbot