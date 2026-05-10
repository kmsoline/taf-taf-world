# 🌍 TAF TAF WORLD — Site Web Officiel

> **Transport & Expédition Internationale — Rapide, Fiable, Mondial**
> 
> *Guen gaaw guen woor*

---

## 🚀 Mise en ligne — Guide étape par étape

### Prérequis

1. **Node.js** installé sur ton Mac → [télécharger ici](https://nodejs.org/) (prends la version LTS)
2. Un compte **GitHub** → [github.com](https://github.com)
3. Un compte **Vercel** → [vercel.com](https://vercel.com) (connexion via GitHub)

### Étape 1 — Installer les dépendances

Ouvre le Terminal, navigue vers le dossier du projet et lance :

```bash
cd taf-taf-world
npm install
```

### Étape 2 — Tester en local

```bash
npm start
```

Le site s'ouvre dans ton navigateur à `http://localhost:3000`

### Étape 3 — Ajouter ton logo

Remplace les fichiers dans le dossier `public/` :
- `favicon.ico` → ton favicon (utilise [favicon.io](https://favicon.io) pour le générer depuis ton logo)
- `logo192.png` → ton logo en 192x192 px
- `og-image.png` → image de partage réseaux sociaux (1200x630 px recommandé)

### Étape 4 — Pousser sur GitHub

```bash
git init
git add .
git commit -m "TAF TAF WORLD v1.0"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/taf-taf-world.git
git push -u origin main
```

> ⚠️ Remplace `TON-USERNAME` par ton vrai nom d'utilisateur GitHub.

### Étape 5 — Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique **"Add New Project"**
3. Connecte ton GitHub et sélectionne le repo `taf-taf-world`
4. Vercel détecte automatiquement React — clique **"Deploy"**
5. En ~2 minutes, ton site est en ligne ! 🎉

### Étape 6 — Connecter ton domaine (optionnel)

Si tu as acheté un domaine (ex: `taftafworld.com`) :

1. Dans Vercel → Settings → Domains → ajoute ton domaine
2. Chez ton registrar (Namecheap, GoDaddy, etc.), pointe les DNS :
   - **A Record** : `76.76.21.21`
   - **CNAME** : `cname.vercel-dns.com`
3. Le HTTPS est activé automatiquement par Vercel

---

## 📁 Structure du projet

```
taf-taf-world/
├── public/
│   ├── index.html        ← Page HTML + SEO + Schema.org
│   ├── robots.txt         ← SEO crawling
│   ├── favicon.ico        ← À remplacer par ton favicon
│   └── og-image.png       ← À ajouter (image réseaux sociaux)
├── src/
│   ├── App.js             ← Composant principal du site
│   ├── index.js           ← Point d'entrée React
│   └── index.css          ← Styles globaux
├── package.json
└── README.md
```

---

## 🎨 Charte graphique intégrée

| Élément | Valeur |
|---------|--------|
| Couleur principale | `#12B8F5` (Bleu TAF TAF) |
| Hover | `#0EA7DF` |
| Noir | `#111111` |
| Gris clair | `#EFEFEF` |
| Police titres | Montserrat Bold/ExtraBold |
| Police textes | Poppins |

---

## 📱 WhatsApp Business

Le numéro WhatsApp configuré : **+221 77 289 38 31**

Pour modifier, ouvre `src/App.js` et change la ligne :
```js
const WHATSAPP_NUMBER = "221772893831";
```

---

## 🔧 Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm start` | Lancer en mode développement |
| `npm run build` | Créer la version production |
| `npm test` | Lancer les tests |

---

## 📈 SEO intégré

- Meta descriptions optimisées
- Schema.org / LocalBusiness
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Géolocalisation Dakar
- Mots-clés : transport international Sénégal, fret Dakar Paris, envoi colis...
- robots.txt configuré

---

© 2026 TAF TAF WORLD — Tous droits réservés
