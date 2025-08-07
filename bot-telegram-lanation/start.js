console.log('🚀 Démarrage du bot Telegram...');
console.log('📁 Répertoire actuel:', process.cwd());
console.log('📂 Fichiers disponibles:', require('fs').readdirSync('.'));

// Démarrer le bot webhook
require('./bot-webhook.js');