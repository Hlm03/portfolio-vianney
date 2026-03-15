# Portfolio — H. Vianney HADONOU

Portfolio personnel de Designer 3D construit avec **Next.js 14**, **Tailwind CSS**, **Framer Motion** et **TypeScript**.

## Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS** — styles utilitaires
- **Framer Motion** — animations fluides
- **TypeScript** — typage statique
- **Lucide React** — icônes
- **React CountUp** — compteurs animés
- **React Intersection Observer** — déclenchement au scroll

## Lancer le projet

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Build production

```bash
npm run build
npm start
```

## Déploiement sur Vercel (recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Connecter votre repo GitHub
3. Importer le projet — Vercel détecte Next.js automatiquement
4. Cliquer **Deploy** ✅

## Structure des fichiers

```
portfolio-vianney/
├── app/
│   ├── globals.css       # Styles globaux + Tailwind
│   ├── layout.tsx        # Layout racine + métadonnées
│   └── page.tsx          # Page principale
├── components/
│   ├── Navbar.tsx        # Navigation sticky + menu mobile
│   ├── Hero.tsx          # Section héro
│   ├── Stats.tsx         # Stats animées + stack outils
│   ├── Services.tsx      # Services & tarifs
│   ├── Skills.tsx        # Barres de compétences animées
│   ├── Projects.tsx      # Grille de projets interactive
│   ├── Reviews.tsx       # Avis clients
│   └── Contact.tsx       # Contact + footer
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Personnalisation

- **Avis clients** : Modifier le tableau `reviews` dans `components/Reviews.tsx`
- **Projets** : Modifier le tableau `projects` dans `components/Projects.tsx`
- **Stats** : Modifier le tableau `stats` dans `components/Stats.tsx`
- **Couleur accent** : Changer `#E8760A` dans `tailwind.config.js`
