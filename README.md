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

| Commande       | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| `pnpm dev`     | Serveur de développement                                                                 |
| `pnpm build`   | Vérifie les types, build le site dans `dist/` et y génère les PDF et les images d'aperçu |
| `pnpm assets`  | Régénère les PDF et les images d'aperçu à partir du build existant                       |
| `pnpm preview` | Sert le build de production en local                                                     |
| `pnpm lint`    | Lint avec oxlint                                                                         |
| `pnpm format`  | Formate le code avec Prettier (`pnpm format:check` pour vérifier)                        |

## Personnaliser

- **Contenu** : le texte français est dans `src/data/cv.fr.ts`, l'anglais dans
  `src/data/cv.en.ts`. La version anglaise reprend les contacts, les compétences,
  les logos et les références de la française, et ne contient que ce qui se
  traduit. Les titres de sections et les libellés des boutons sont dans `labels`.
  Dans les textes, `**mot**` met le mot en avant avec la couleur d'accent ; dans
  les listes de compétences, il marque les compétences principales.
- **Couleurs** : elles sont toutes définies dans le bloc `@theme` de
  `src/index.css`, et uniquement là. Modifier une valeur la met à jour partout
  (textes, dégradés, icônes, pointillés…).
- **Photo** : `src/assets/photo.jpg`, importée dans `src/data/cv.fr.ts`. Pour la
  changer, remplacer le fichier (de préférence carré). Sans photo, les initiales
  s'affichent à la place.
- **Logos des compétences** : fichiers SVG de `src/assets/logos/`, associés aux
  compétences par leur nom dans `logos` (jeu
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

## Version anglaise

La version anglaise est servie sous `/en/` : c'est la page `en/index.html`, avec
son propre titre et sa description d'aperçu. L'application lit la langue dans
l'attribut `lang` de la page (`src/data/cv.ts`). Le bouton « English » /
« Français » passe d'une version à l'autre.

## Export PDF et aperçu du lien

Les PDF sont générés au build par `scripts/generate-assets.ts` : le script sert
`dist/` avec `vite preview`, ouvre chaque version dans Chromium headless et
l'imprime en A4, dans `dist/guillaume-gozillon-cv.pdf` (français) et
`dist/guillaume-gozillon-cv-en.pdf` (anglais). Le bouton de téléchargement de
chaque page pointe vers le PDF de sa langue.

Le même script capture le haut de chaque version dans `dist/og-image.png` et
`dist/og-image-en.png` (1200 × 630) : c'est l'image affichée quand le lien est
partagé (LinkedIn, Slack…). Le titre et la description de l'aperçu sont dans
`index.html` et `en/index.html`.

La mise en page d'impression est gérée en CSS (`@page` et variantes `print:` de
Tailwind). En développement, le PDF n'existe pas encore : le bouton ouvre alors
la boîte de dialogue d'impression du navigateur.

## Déploiement

Le site est publié sur GitHub Pages :
<https://guillaume-gozillon.github.io/guillaume-gozillon-cv/>, et en anglais sur
<https://guillaume-gozillon.github.io/guillaume-gozillon-cv/en/>.

Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml`, qui
build le site, génère les PDF et les images d'aperçu, puis les déploie. Le build
tourne sur macOS pour disposer de la police Avenir Next. Le workflow peut aussi
être relancé à la main depuis l'onglet Actions.

Pour un autre hébergement, deux variables d'environnement règlent le build :

- `BASE_PATH` : chemin sous lequel le site est servi (`/` par défaut) ;
- `SITE_URL` : URL publique du site. Les réseaux sociaux exigent une URL
  absolue pour l'image d'aperçu.

```bash
BASE_PATH=/mon-cv/ SITE_URL=https://exemple.fr/mon-cv pnpm build
```
