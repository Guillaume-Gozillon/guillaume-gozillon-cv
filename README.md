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

| Commande       | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `pnpm dev`     | Serveur de développement                                          |
| `pnpm build`   | Vérifie les types, build le site dans `dist/` et y génère le PDF  |
| `pnpm pdf`     | Régénère uniquement le PDF à partir du build existant             |
| `pnpm preview` | Sert le build de production en local                              |
| `pnpm lint`    | Lint avec oxlint                                                  |
| `pnpm format`  | Formate le code avec Prettier (`pnpm format:check` pour vérifier) |

## Personnaliser

- **Contenu** : tout le texte est dans `src/data/cv.ts`. Dans les textes,
  `**mot**` met le mot en avant avec la couleur d'accent.
- **Couleurs** : elles sont toutes définies dans le bloc `@theme` de
  `src/index.css`, et uniquement là. Modifier une valeur la met à jour partout
  (textes, dégradés, icônes, pointillés…).
- **Photo** : déposer l'image dans `src/assets/`, puis dans `src/data/cv.ts`,
  ajouter `import photo from '../assets/photo.jpg'` et `photo,` dans l'objet
  `cv`. Les initiales sont affichées tant qu'il n'y a pas de photo.
- **Logos des compétences** : fichiers SVG de `src/assets/logos/` (jeu
  [Iconify « logos »](https://icon-sets.iconify.design/logos/), CC0). Leur
  taille d'affichage est définie par les attributs `width`/`height` du fichier,
  et `level` (de 0 à 100) règle la longueur de l'anneau autour du logo.

La maquette d'origine est en points (A4 = 595 × 842 pt) : dans ce projet,
1 unité d'espacement Tailwind = 1 pt (`mt-12` = 12 pt).

## Polices

Le CV utilise Avenir Next, fournie avec macOS et iOS. Ailleurs, la police de
secours [Mulish](https://fonts.google.com/specimen/Mulish), aux métriques très
proches, est chargée automatiquement. Pour obtenir un PDF identique à la
maquette, il faut donc le générer sur un Mac.

## Export PDF

Le PDF est généré au build par `scripts/generate-pdf.ts` : le script sert `dist/`
avec `vite preview`, ouvre la page dans Chromium headless et l'imprime en A4 dans
`dist/guillaume-gozillon-cv.pdf`. Le bouton « Télécharger en PDF » de la page
pointe vers ce fichier.

La mise en page d'impression est gérée en CSS (`@page` et variantes `print:` de
Tailwind). En développement, le PDF n'existe pas encore : le bouton ouvre alors
la boîte de dialogue d'impression du navigateur.
