/** Opens external links in a new tab, so the CV stays open */
export const linkTargetProps = (href: string) =>
  /^https?:/.test(href) ? { target: '_blank', rel: 'noreferrer' } : {}
