# CV — Guillaume Gozillon

Mon CV en HTML, avec un export PDF généré à partir de la page.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Playwright](https://playwright.dev) pour générer le PDF avec Chromium headless

## Prérequis

- Node.js ≥ 22.18 (le script PDF est exécuté directement en TypeScript par Node)
- pnpm 11

## Installation

```bash
pnpm install
pnpm exec playwright install --only-shell chromium # navigateur utilisé pour générer le PDF
```

## Scripts

| Commande       | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| `pnpm dev`     | Serveur de développement                                                             |
| `pnpm build`   | Vérifie les types, build le site dans `dist/` et y génère le PDF et l'image d'aperçu |
| `pnpm assets`  | Régénère le PDF et l'image d'aperçu à partir du build existant                       |
| `pnpm preview` | Sert le build de production en local                                                 |
| `pnpm lint`    | Lint avec oxlint                                                                     |
| `pnpm format`  | Formate le code avec Prettier (`pnpm format:check` pour vérifier)                    |

## Personnaliser

- **Contenu** : tout le texte est dans `src/data/cv.ts`. Dans les textes,
  `**mot**` met le mot en avant avec la couleur d'accent.
- **Couleurs** : elles sont toutes définies dans le bloc `@theme` de
  `src/index.css`, et uniquement là. Modifier une valeur la met à jour partout
  (textes, dégradés, icônes, pointillés…).
- **Photo** : `src/assets/photo.jpg`, importée dans `src/data/cv.ts`. Pour la
  changer, remplacer le fichier (de préférence carré). Sans photo, les initiales
  s'affichent à la place.
- **Logos des compétences** : fichiers SVG de `src/assets/logos/` (jeu
  [Iconify « logos »](https://icon-sets.iconify.design/logos/), CC0). Leur
  taille d'affichage relative est définie par les attributs `width`/`height`
  du fichier.
- **Favicons** : `public/favicon.svg`, `favicon.ico` et `apple-touch-icon.png`.
  Ce sont des fichiers statiques : leurs couleurs ne suivent pas le thème.

La maquette d'origine est en points (A4 = 595 × 842 pt) : dans ce projet,
1 unité d'espacement Tailwind = 1 pt (`mt-12` = 12 pt).

## Polices

Le CV utilise Avenir Next, fournie avec macOS et iOS. Ailleurs, la police de
secours [Mulish](https://fonts.google.com/specimen/Mulish), aux métriques très
proches, est chargée automatiquement. Pour obtenir un PDF identique à la
maquette, il faut donc le générer sur un Mac.

## Affichage mobile

Sous 768 px de large, la feuille A4 laisse la place à une version sur une colonne,
lisible sans zoomer (`src/components/CvMobile.tsx`). Elle utilise les mêmes
données et le même thème. La feuille A4 reste affichée au-delà, et sert toujours
à l'impression et au PDF.

## Export PDF et aperçu du lien

Le PDF est généré au build par `scripts/generate-assets.ts` : le script sert
`dist/` avec `vite preview`, ouvre la page dans Chromium headless et l'imprime en
A4 dans `dist/guillaume-gozillon-cv.pdf`. Le bouton « Télécharger en PDF » de la
page pointe vers ce fichier.

Le même script capture le haut du CV dans `dist/og-image.png` (1200 × 630) : c'est
l'image affichée quand le lien est partagé (LinkedIn, Slack…). Le titre et la
description de l'aperçu sont dans `index.html`.

La mise en page d'impression est gérée en CSS (`@page` et variantes `print:` de
Tailwind). En développement, le PDF n'existe pas encore : le bouton ouvre alors
la boîte de dialogue d'impression du navigateur.

## Déploiement

Le site est publié sur GitHub Pages :
<https://guillaume-gozillon.github.io/guillaume-gozillon-cv/>

Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`, qui
build le site, génère le PDF et l'image d'aperçu, puis les déploie. Le build
tourne sur macOS pour disposer de la police Avenir Next. Le workflow peut aussi
être relancé à la main depuis l'onglet Actions.

Pour un autre hébergement, deux variables d'environnement règlent le build :

- `BASE_PATH` : chemin sous lequel le site est servi (`/` par défaut) ;
- `SITE_URL` : URL publique du site. Les réseaux sociaux exigent une URL
  absolue pour l'image d'aperçu.

```bash
BASE_PATH=/mon-cv/ SITE_URL=https://exemple.fr/mon-cv pnpm build
```
