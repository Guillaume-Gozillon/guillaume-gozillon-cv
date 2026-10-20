// Shared by the page and scripts/generate-assets.ts

/**
 * Information still to fill in, written `[À COMPLÉTER]` or `[À COMPLÉTER : what]`
 * in the texts of the CV. It is highlighted on the page, and the deployment
 * fails as long as one is left. The group keeps it when a text is split around
 * it, and `\s` also matches the non-breaking space it gets on the page.
 */
export const PLACEHOLDER = /(\[À\sCOMPLÉTER[^\]]*\])/
