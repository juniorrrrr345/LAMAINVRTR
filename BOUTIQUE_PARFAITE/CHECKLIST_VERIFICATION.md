# ✅ CHECKLIST DE VÉRIFICATION - BOUTIQUE JBEL INDUSTRY

## 🔍 AVANT LE DÉPLOIEMENT

### Variables d'environnement (.env.local)
- [ ] `MONGODB_URI` - URI complète avec mot de passe
- [ ] `MONGODB_DB` - Défini sur `lmvrt2`
- [ ] `CLOUDINARY_CLOUD_NAME` - Depuis dashboard Cloudinary
- [ ] `CLOUDINARY_API_KEY` - Depuis dashboard Cloudinary
- [ ] `CLOUDINARY_API_SECRET` - Depuis dashboard Cloudinary
- [ ] `NEXTAUTH_URL` - `http://localhost:3000` pour dev
- [ ] `NEXTAUTH_SECRET` - Généré avec openssl
- [ ] `ADMIN_USERNAME` - Défini (ex: admin)
- [ ] `ADMIN_PASSWORD` - Mot de passe fort

### MongoDB Atlas
- [ ] Cluster créé
- [ ] Utilisateur créé avec mot de passe fort
- [ ] IP autorisée (votre IP ou 0.0.0.0/0)
- [ ] URI testée avec MongoDB Compass

### Test local
```bash
npm run dev
```
- [ ] Site charge sur http://localhost:3000
- [ ] Pas d'erreur dans la console
- [ ] `/admin` accessible

---

## 🚀 APRÈS LE DÉPLOIEMENT

### Vercel
- [ ] Toutes les variables d'environnement ajoutées
- [ ] `NEXTAUTH_URL` changé pour l'URL Vercel
- [ ] Build réussi sans erreur
- [ ] Domaine personnalisé configuré (optionnel)

### Test fonctionnel

#### 1. Admin Panel (/admin)
- [ ] Connexion fonctionne
- [ ] Configuration → Enregistrer fonctionne
- [ ] Upload image de fond fonctionne
- [ ] Image de fond visible immédiatement

#### 2. Gestion contenu
- [ ] Ajouter catégorie → Visible dans boutique
- [ ] Ajouter farm → Visible dans boutique
- [ ] Ajouter produit avec image → Visible immédiatement
- [ ] Modifier produit → Changements visibles
- [ ] Supprimer produit → Pas de message d'erreur

#### 3. Pages
- [ ] `/info` → Contenu du panel admin (pas d'ancien texte)
- [ ] `/contact` → Contenu du panel admin (pas d'ancien texte)
- [ ] `/social` → Liens configurés dans admin
- [ ] Pas de loader/chargement sur ces pages

#### 4. Boutique principale
- [ ] Loading screen visible 7 secondes (première visite)
- [ ] Background visible pendant le loading
- [ ] Produits affichés instantanément après
- [ ] Filtres catégorie/farm fonctionnent
- [ ] Recherche fonctionne
- [ ] Vidéos produits lisibles

#### 5. Responsive
- [ ] Mobile : Navigation fluide
- [ ] Mobile : BottomNav visible et net
- [ ] Tablette : Affichage correct
- [ ] Desktop : Tout fonctionne

#### 6. WhatsApp
- [ ] Lien WhatsApp fonctionne
- [ ] Ouvre WhatsApp avec bon numéro

---

## 🐛 SI PROBLÈME

### "Cannot connect to MongoDB"
- Vérifier IP autorisée dans MongoDB Atlas
- Vérifier mot de passe correct dans URI
- Tester URI avec MongoDB Compass

### "Build failed on Vercel"
- Vérifier TOUTES les variables d'environnement
- Vérifier logs de build
- Essayer `npm run build` en local

### "Anciennes données apparaissent"
- Vider cache navigateur
- Vérifier que vous êtes sur la bonne URL
- Les pages doivent être : `/info`, `/contact`, `/social`

### "Admin panel erreur 500"
- Vérifier `ADMIN_USERNAME` et `ADMIN_PASSWORD`
- Vérifier `NEXTAUTH_SECRET` est défini
- Vérifier `NEXTAUTH_URL` correspond à l'URL actuelle

---

## ✅ TOUT EST BON ?

Si toutes les cases sont cochées, votre boutique JBEL INDUSTRY est parfaitement configurée et prête ! 🎉

**Profitez de votre boutique sans bugs !** 🛍️✨