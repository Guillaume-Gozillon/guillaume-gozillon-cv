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

interface RichTextProps {
  text: string
  /** Class of the highlighted words */
  accentClassName?: string
}

/** Renders `**word**` segments with the accent color */
export function RichText({
  text,
  accentClassName = 'text-accent'
}: RichTextProps) {
  return text.split(/\*\*(.+?)\*\*/).map((part, index) =>
    index % 2 ? (
      <span key={index} className={accentClassName}>
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

interface DashedBorderProps {
  /** SVG lengths, e.g. `6pt` */
  dash: string
  gap: string
  width?: string
  radius: string
  className?: string
}

/** Dashed rounded border overlay, for dash patterns CSS borders cannot draw */
export function DashedBorder({
  dash,
  gap,
  width = '1pt',
  radius,
  className
}: DashedBorderProps) {
  return (
    <svg
      aria-hidden
      className={cx(
        'pointer-events-none absolute inset-0 size-full overflow-visible',
        className
      )}
    >
      <rect
        width='100%'
        height='100%'
        rx={radius}
        ry={radius}
        fill='none'
        stroke='currentColor'
        strokeWidth={width}
        strokeDasharray={`${dash} ${gap}`}
      />
    </svg>
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

/** Dot of the timeline, centered on the vertical line of the main column */
export function TimelineDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx(
        'absolute -left-20 size-10 rounded-full border-[2pt] border-white bg-dot',
        className
      )}
    />
  )
}
