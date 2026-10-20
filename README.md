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
  les listes de compétences, il marque les compétences principales. La
  description d'une expérience est un paragraphe, ou une liste de textes
  affichée en puces ; `featured: true` la met en avant avec un filet bleu à
  gauche (Nricher).
- **Informations à compléter** : une information encore inconnue s'écrit
  `[À COMPLÉTER]`, ou `[À COMPLÉTER : précision]` (`src/placeholder.ts`). Elle
  est surlignée en jaune sur la page, et le déploiement échoue tant qu'il en
  reste une (voir « Export PDF »).
- **Couleurs** : ce sont celles de [guillaume-gozillon.dev](https://guillaume-gozillon.dev),
  les gris neutres et les bleus de sa palette Tailwind, pour que le CV et le site
  soient raccord. Elles sont toutes définies dans le bloc `@theme` de
  `src/index.css`, et uniquement là. Modifier une valeur la met à jour partout
  (textes, icônes, filets, puces…).
- **Photo** : `src/assets/photo.jpg`, importée dans `src/data/cv.fr.ts`. Pour la
  changer, remplacer le fichier (de préférence carré). Sans photo, les initiales
  s'affichent à la place.
- **Logos des compétences** : fichiers SVG de `src/assets/logos/`, associés aux
  compétences par leur nom dans `logos` (jeu
  [Iconify « logos »](https://icon-sets.iconify.design/logos/), CC0). Celui de
  Scaleway, absent de ce jeu, vient de [Simple Icons](https://simpleicons.org)
  (CC0 aussi), avec sa couleur de marque. Leur taille d'affichage relative est
  définie par les attributs `width`/`height` du fichier.
- **Favicons** : le « gg » du site. `public/favicon.ico` et
  `apple-touch-icon.png` sont ses icônes, `favicon.svg` le redessine. Ce sont des
  fichiers statiques : leurs couleurs ne suivent pas le thème.

La feuille A4 est mise en page en points (595 × 842 pt) : dans ce projet,
1 unité d'espacement Tailwind = 1 pt (`mt-12` = 12 pt).

## Polices

Ce sont celles de guillaume-gozillon.dev : [Geist](https://vercel.com/font) pour
le texte, et Geist Mono pour les petits libellés des groupes de compétences. Elles sont chargées avec Fontsource et livrées avec le site, donc le
PDF est le même quelle que soit la machine qui le génère.

Les ATS lisent le texte du PDF : après un changement de police, vérifier avec
`pdftotext -raw` que les mots ne sont pas collés. Chromium intègre les polices
variables en Type 3, dont le texte est mal extrait, et les espaces étroits de
certaines polices collent des mots : les polices sont donc chargées en styles
statiques (`src/main.tsx`).

## Affichage mobile

Sur téléphone, c'est la même feuille A4 qui est affichée, réduite à la largeur
de l'écran comme dans un lecteur PDF (`src/lib/useSheetScale.ts`) : on voit
tout de suite qu'il s'agit d'un CV à télécharger. Elle est mise en page à sa
taille réelle avant d'être réduite, donc les retours à la ligne ne changent pas.

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

Avant d'imprimer une version, le script la vérifie :

- si le contenu dépasse la feuille A4, le build échoue : sinon la fin serait
  coupée sans prévenir ;
- s'il reste un `[À COMPLÉTER]`, le script les liste. En local, le build
  continue, pour pouvoir prévisualiser. En CI, il échoue : rien n'est déployé et
  la version en ligne ne change pas.

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
build le site, génère les PDF et les images d'aperçu, puis les déploie. Le
workflow peut aussi être relancé à la main depuis l'onglet Actions.

Pour un autre hébergement, deux variables d'environnement règlent le build :

- `BASE_PATH` : chemin sous lequel le site est servi (`/` par défaut) ;
- `SITE_URL` : URL publique du site. Les réseaux sociaux exigent une URL
  absolue pour l'image d'aperçu.

```bash
BASE_PATH=/mon-cv/ SITE_URL=https://exemple.fr/mon-cv pnpm build
```
