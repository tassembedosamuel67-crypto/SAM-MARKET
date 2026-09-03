# 🛍️ SAM MARKET - Version GitHub Pages

**Marketplace en ligne adaptée au Burkina Faso 🇧🇫**

Une plateforme moderne permettant aux utilisateurs d'acheter et vendre des produits facilement.

---

## 🌍 **ACCÉDER À L'APPLICATION**

### ✅ **EN DIRECT SUR:**
```
https://tassembedosamuel67-crypto.github.io/SAM-MARKET
```

**C'est automatique! GitHub héberge votre site gratuitement!** 🚀

---

## ✨ **Fonctionnalités**

✅ **Interface moderne et responsive**
- Navigation fluide
- Design adapté (mobile, tablet, desktop)
- Animations agréables

✅ **Gestion du panier**
- Ajouter/retirer des produits
- Voir le total des achats
- Sauvegarder le panier (localStorage)
- Passer commande

✅ **Recherche et filtrage**
- Rechercher par nom/description
- Filtrer par catégories
- Affichage dynamique des résultats

✅ **6 catégories de produits**
- Mode & Vêtements
- Maison & Électronique
- Téléphones & Accessoires
- Jeux & Loisirs
- Alimentation
- Éducation & Livres

---

## 📂 **Structure des fichiers**

```
SAM-MARKET/
├── index.html           ← Page principale
├── css/
│   └── style.css       ← Styles modernes
├── js/
│   └── app.js          ← Logique JavaScript
└── README.md           ← Documentation
```

---

## 🔧 **Modifier l'application**

### **Ajouter de nouveaux produits:**

Modifiez `js/app.js` et ajoutez dans `allProducts`:

```javascript
{
    id: 7,
    name: 'Nom du produit',
    description: 'Description détaillée',
    price: 50000,
    category: 'Catégorie',
    emoji: '📦',
    seller: 'Vendeur',
    stock: 5
}
```

### **Changer les couleurs:**

Modifiez `css/style.css`:

```css
:root {
    --primary-color: #FF6B35;      /* Couleur principale */
    --secondary-color: #004E89;    /* Couleur secondaire */
    --accent-color: #F7B801;       /* Couleur accent */
}
```

### **Mettre à jour le site:**

```bash
# 1. Modifier les fichiers localement
# 2. Sauvegarder
# 3. Pousser vers GitHub

git add .
git commit -m "Mise à jour SAM MARKET"
git push origin main
```

**GitHub Pages se met à jour automatiquement!** ⏳ (quelques minutes)

---

## 💾 **Données sauvegardées**

Le panier est sauvegardé dans **localStorage** du navigateur.
Il persiste même après fermeture de la page!

---

## 🌟 **Prochaines étapes**

Pour une version complète avec backend:

1. ✅ Ajouter un serveur Node.js (Heroku, Render)
2. ✅ Ajouter MongoDB
3. ✅ Authentification des utilisateurs
4. ✅ Système de paiement
5. ✅ Tableaux de bord vendeur

---

## 📞 **Informations de contact**

- 📧 Email: contact@sammarket.bf
- 📱 Tél: +226 25 XX XX XX
- 📍 Ouagadougou, Burkina Faso
- 🌐 GitHub: https://github.com/tassembedosamuel67-crypto/SAM-MARKET

---

## 📝 **Licence**

MIT License - Libre d'utilisation

---

**Développé par SAM DIGITAL**

✨ **Bienvenue sur SAM MARKET!** ✨
