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

## Export PDF

Le PDF est généré au build par `scripts/generate-pdf.ts` : le script sert `dist/`
avec `vite preview`, ouvre la page dans Chromium headless et l'imprime en A4 dans
`dist/guillaume-gozillon-cv.pdf`. Le bouton « Télécharger en PDF » de la page
pointe vers ce fichier.

La mise en page d'impression est gérée en CSS (`@page` et variantes `print:` de
Tailwind). En développement, le PDF n'existe pas encore : le bouton ouvre alors
la boîte de dialogue d'impression du navigateur.
