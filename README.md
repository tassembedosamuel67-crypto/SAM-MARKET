# 🛍️ SAM MARKET

**Marketplace en ligne adaptée au Burkina Faso 🇧🇫**

Une plateforme moderne permettant aux utilisateurs d'acheter et vendre des produits facilement. Interface intuitive, recherche avancée, catégories, gestion de produits et panier.

**Projet développé par SAM DIGITAL**

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé:

- **Node.js** (v14 ou supérieur) - [Télécharger](https://nodejs.org/)
- **npm** ou **yarn**
- **MongoDB** (local ou cloud) - [Télécharger](https://www.mongodb.com/try/download/community)
- **Git**

---

## 🚀 Installation et Démarrage

### 1. Cloner le repository
```bash
git clone https://github.com/tassembedosamuel67-crypto/SAM-MARKET.git
cd SAM-MARKET
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine du projet:

```bash
cp .env.example .env
```

Modifiez le fichier `.env` avec vos configurations:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/sam-market
JWT_SECRET=your_secret_key_here
```

### 4. Démarrer MongoDB

**Option A: MongoDB local**
```bash
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Modifiez `MONGODB_URI` dans `.env` avec votre URL de connexion

### 5. Lancer l'application

**Mode développement (avec rechargement automatique)**
```bash
npm run dev
```

**Mode production**
```bash
npm start
```

✅ L'application sera accessible à: **http://localhost:5000**

---

## 📁 Structure du Projet

```
SAM-MARKET/
├── public/                    # Fichiers statiques
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── images/
├── models/                    # Schémas MongoDB (À implémenter)
├── routes/                    # Routes API (À implémenter)
├── controllers/               # Logique métier (À implémenter)
├── middleware/                # Middlewares (À implémenter)
├── server.js                  # Serveur principal
├── .env.example              # Exemple de configuration
├── .gitignore                # Fichiers à ignorer
├── package.json              # Dépendances
└── README.md                 # Documentation
```

---

## 🔧 API Endpoints

### Santé du serveur
- `GET /api/health` - Vérifier que l'API fonctionne ✅

### À implémenter
- Authentication routes
- Products CRUD
- Orders management

---

## 💻 Commandes Utiles

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Démarrer en mode production
npm start

# Installer une nouvelle dépendance
npm install <package-name>
```

---

## 🐛 Dépannage

### Erreur: "Cannot find module 'express'"
```bash
npm install
```

### Erreur: "Connection refused" (MongoDB)
```bash
mongod
```

### Port 5000 déjà utilisé
Modifiez le PORT dans `.env`:
```env
PORT=3000
```

---

## 📦 Technologies Utilisées

- **Backend**: Node.js, Express.js
- **Base de données**: MongoDB, Mongoose
- **Frontend**: HTML5, CSS3, JavaScript
- **Sécurité**: JWT, bcryptjs, CORS

---

## 👥 Équipe

**Développé par: SAM DIGITAL**

---

## 📝 Licence

MIT License

---

**Dernière mise à jour**: Septembre 2026

🚀 **Happy Coding!**