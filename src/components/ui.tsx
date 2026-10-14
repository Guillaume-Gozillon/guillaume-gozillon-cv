import { useId, type ReactNode, type SVGProps } from 'react'
import { cx } from '../lib/cx'
import { linkTargetProps } from '../lib/links'

interface GradientTextProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  children: string
  /** Baseline position from the top of the box, as an SVG length */
  baseline: string
}

/**
 * Centered text filled with the brand gradient. Drawn in SVG so the PDF keeps a
 * single, selectable copy of the text (`background-clip: text` duplicates it).
 */
export function GradientText({
  children,
  baseline,
  className,
  ...props
}: GradientTextProps) {
  const id = `gradient-${useId().replace(/[^\w-]/g, '')}`
  return (
    <svg className={cx('block overflow-visible', className)} {...props}>
      <defs>
        <linearGradient id={id}>
          <stop style={{ stopColor: 'var(--color-primary-light)' }} />
          <stop offset='1' style={{ stopColor: 'var(--color-primary-dark)' }} />
        </linearGradient>
      </defs>
      <text x='50%' y={baseline} textAnchor='middle' fill={`url(#${id})`}>
        {children}
      </text>
    </svg>
  )
}

/** Renders `**word**` segments with the accent color */
export function RichText({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, index) =>
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
        'decoration-[0.75pt] underline-offset-[1.5pt] transition-colors [text-decoration-skip-ink:none] hover:text-primary-dark hover:decoration-[1.5pt]',
        underline === 'always' ? 'underline' : 'hover:underline'
      )}
    >
      {children}
    </a>
  )
}

interface DashedLineProps {
  vertical?: boolean
  /** Dash length, gap length and pattern offset, in points */
  dash?: number
  gap?: number
  offset?: number
  className?: string
}

/** Straight dashed line drawn with the current text color */
export function DashedLine({
  vertical = false,
  dash = 6,
  gap = 6,
  offset = 0,
  className
}: DashedLineProps) {
  const start = -offset
  return (
    <span
      aria-hidden
      className={cx('block', className)}
      style={{
        backgroundImage: `repeating-linear-gradient(${vertical ? 'to bottom' : 'to right'}, currentColor ${start}pt ${start + dash}pt, transparent ${start + dash}pt ${start + dash + gap}pt)`
      }}
    />
  )
}

const labelSizes = {
  sheet: 'gap-6 text-sm tracking-[0.14em]',
  phone: 'gap-8 text-phone-sm tracking-[0.14em]'
}

/** Uppercase section title followed by a thin line */
export function SectionLabel({
  children,
  size = 'sheet',
  className
}: {
  children: string
  size?: keyof typeof labelSizes
  className?: string
}) {
  return (
    <h2
      className={cx(
        'flex items-center font-bold text-primary uppercase',
        labelSizes[size],
        className
      )}
    >
      {children}
      <span aria-hidden className='h-[0.75pt] flex-1 bg-line' />
    </h2>
  )
}

interface SectionTitleProps {
  children: ReactNode
  light?: boolean
  className?: string
}

/** Pill-shaped section title */
export function SectionTitle({
  children,
  light,
  className
}: SectionTitleProps) {
  return (
    <h2
      className={cx(
        'flex h-20 w-170 items-center justify-center rounded-full text-base font-semibold',
        light ? 'bg-white text-primary-deep' : 'bg-brand-96 text-tint',
        className
      )}
    >
      {children}
    </h2>
  )
}

/** Dot of the timeline, placed on its line by the caller */
export function TimelineDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx(
        'absolute size-10 rounded-full border-[2pt] border-white bg-dot',
        className
      )}
    />
  )
}
