import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { linkTargetProps } from '../lib/links'

/** French typography: no line break before `:` `;` `!` `?`, nor inside a number like `1 200` */
const keepTogether = (text: string) =>
  text.replace(/ (?=[:;!?])|(?<=\d) (?=\d{3}\b)/g, '\u00a0')

/** Renders a text of `cv.ts`, with `**word**` segments in the accent color */
export function RichText({ text }: { text: string }) {
  return keepTogether(text)
    .split(/\*\*(.+?)\*\*/)
    .map((part, index) =>
      index % 2 ? (
        <span key={index} className='text-accent'>
          {part}
        </span>
      ) : (
        part
      )
    )
}

interface TextLinkProps {
  href: string
  children: ReactNode
  /** Underline always, or only on hover */
  underline?: 'always' | 'hover'
}

/** Text link, darker with a thicker underline on hover */
export function TextLink({
  href,
  children,
  underline = 'always'
}: TextLinkProps) {
  return (
    <a
      href={href}
      {...linkTargetProps(href)}
      className={cx(
        'decoration-[0.75pt] underline-offset-[1.5pt] transition-colors [text-decoration-skip-ink:none] hover:text-ink hover:decoration-[1.5pt]',
        underline === 'always' ? 'underline' : 'hover:underline'
      )}
    >
      {children}
    </a>
  )
}

/** Section title under a short rule in the website's blue-to-violet gradient */
export function SectionTitle({
  children,
  className
}: {
  children: string
  className?: string
}) {
  return (
    <h2
      className={cx('text-xl font-semibold tracking-tight text-ink', className)}
    >
      <span
        aria-hidden
        className='mb-5 block h-[1.5pt] w-16 bg-linear-to-r from-accent to-accent-secondary'
      />
      {children}
    </h2>
  )
}
