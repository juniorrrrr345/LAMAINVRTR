console.log('🚀 Démarrage du bot Telegram...');
console.log('📁 Répertoire actuel:', process.cwd());
console.log('📂 Fichiers disponibles:', require('fs').readdirSync('.'));

// Démarrer le bot MongoDB (version complète)
require('./bot-mongodb.js');