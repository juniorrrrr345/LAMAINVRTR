# 🚀 GUIDE D'INSTALLATION BOUTIQUE PARFAITE - JBEL INDUSTRY

## ✅ TOUTES LES CORRECTIONS INCLUSES :
- ✅ Plus JAMAIS d'anciennes données (info/contact/social)
- ✅ Affichage INSTANTANÉ sans chargement
- ✅ Suppression sans messages d'erreur
- ✅ Modification catégories/farms corrigée
- ✅ Loading screen élégant sur première visite
- ✅ Thème background visible partout
- ✅ Synchronisation instantanée admin → boutique
- ✅ Responsive parfait (mobile/tablette/desktop)
- ✅ Navigation fluide sans rechargement

---

## 📋 ÉTAPE 1 : CONFIGURATION MONGODB ATLAS

### 1.1 Créer un nouveau cluster MongoDB Atlas
1. Aller sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un nouveau cluster gratuit
3. Créer un utilisateur avec mot de passe
4. Ajouter votre IP à la whitelist (ou 0.0.0.0/0 pour tout autoriser)
5. Récupérer l'URI de connexion

### 1.2 Structure de la base de données
La boutique créera automatiquement ces collections :
- `products` - Produits
- `categories` - Catégories
- `farms` - Farms
- `settings` - Configuration boutique
- `pages` - Pages info/contact
- `socialLinks` - Liens réseaux sociaux
- `orders` - Commandes

---

## 📋 ÉTAPE 2 : CONFIGURATION CLOUDINARY

1. Créer un compte sur [Cloudinary](https://cloudinary.com)
2. Récupérer depuis le dashboard :
   - Cloud Name
   - API Key
   - API Secret

---

## 📋 ÉTAPE 3 : DÉPLOIEMENT SUR VERCEL

### 3.1 Préparer le repository GitHub
```bash
# Initialiser git dans le dossier
git init
git add .
git commit -m "Initial commit - Boutique parfaite"

# Créer un nouveau repo sur GitHub et le lier
git remote add origin https://github.com/VOTRE_USERNAME/NOUVEAU_REPO.git
git branch -M main
git push -u origin main
```

### 3.2 Déployer sur Vercel
1. Aller sur [Vercel](https://vercel.com)
2. Importer le projet depuis GitHub
3. Configurer les variables d'environnement :

```env
# MongoDB
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=APPNAME
MONGODB_DB=lmvrt2

# Cloudinary
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret

# NextAuth
NEXTAUTH_URL=https://votre-boutique.vercel.app
NEXTAUTH_SECRET=générer_avec_openssl_rand_base64_32

# Admin (optionnel - peut être changé dans MongoDB après)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=votre_mot_de_passe_fort
```

### 3.3 Générer NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

---

## 📋 ÉTAPE 4 : CONFIGURATION INITIALE

### 4.1 Connexion admin
1. Aller sur `https://votre-boutique.vercel.app/admin`
2. Username : `admin`
3. Password : celui configuré dans les variables d'environnement

### 4.2 Configuration boutique (Panel Admin → Configuration)
- **Titre** : JBEL INDUSTRY (ou votre nom)
- **Sous-titre** : Votre slogan
- **Lien WhatsApp** : https://wa.me/VOTRE_NUMERO
- **Image de fond** : Uploader votre image
- **Opacité** : 20 (recommandé)
- **Flou** : 5 (recommandé)
- **Texte défilant** : REJOIGNEZ NOS RESEAUX 📛

### 4.3 Ajouter du contenu
1. **Catégories** : Créer vos catégories (ex: 120U ++ 🇲🇦)
2. **Farms** : Créer vos farms
3. **Produits** : Ajouter avec image, vidéo, prix par quantité
4. **Pages** : Modifier Info et Contact
5. **Réseaux sociaux** : Ajouter vos liens

---

## 🔧 PERSONNALISATION AVANCÉE

### Changer le nom "PLUG" dans l'admin
Fichier : `src/components/admin/AdminDashboard.tsx`
Ligne 59 : Remplacer `PLUG` par votre nom

### Changer les couleurs
Fichier : `src/app/globals.css`
- Couleurs principales : Chercher `from-blue-500 to-purple-500`
- Couleur verte WhatsApp : Chercher `bg-green-600`

### Changer le favicon
Remplacer : `public/favicon.ico`

---

## 🚨 IMPORTANT - NE PAS OUBLIER

1. **Sécurité MongoDB** : 
   - Utiliser un mot de passe fort
   - Limiter les IP autorisées en production

2. **Variables d'environnement** :
   - Ne JAMAIS commit le fichier `.env.local`
   - Toujours utiliser Vercel pour les variables

3. **Première connexion admin** :
   - Changer immédiatement le mot de passe admin
   - Le stocker en lieu sûr

4. **Performance** :
   - Les images sont automatiquement optimisées par Cloudinary
   - Le cache est géré automatiquement

---

## 📱 FONCTIONNALITÉS INCLUSES

### Boutique principale
- ✅ Affichage produits avec filtres (catégorie/farm)
- ✅ Vidéos produits
- ✅ Prix par quantité
- ✅ Recherche instantanée
- ✅ Pages info/contact/social
- ✅ WhatsApp intégré
- ✅ Thème personnalisable
- ✅ 100% responsive

### Panel Admin
- ✅ Gestion complète produits/catégories/farms
- ✅ Upload images/vidéos
- ✅ Éditeur de pages
- ✅ Configuration boutique
- ✅ Gestion réseaux sociaux
- ✅ Visualisation commandes
- ✅ Synchronisation instantanée

---

## 🆘 SUPPORT

Si vous avez des questions :
1. Vérifier les logs Vercel
2. Vérifier la connexion MongoDB
3. Vérifier les variables d'environnement

---

## 🎉 VOTRE BOUTIQUE EST PRÊTE !

Une fois déployée, votre boutique sera :
- 🚀 Ultra rapide
- 📱 Parfaitement responsive  
- 🔄 Synchronisée en temps réel
- 🎨 Entièrement personnalisable
- 🔒 Sécurisée

**Bonne vente avec JBEL INDUSTRY !** 🛍️✨