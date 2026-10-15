import { cx } from '../lib/cx'
import { cv } from '../data/cv'
import { SectionLabel, TextLink } from './ui'

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cx(
        'grid grid-cols-[1fr_1.45fr] gap-x-28 rounded-band bg-tint px-20 pt-14 text-primary',
        className
      )}
    >
      <section>
        <SectionLabel>{cv.labels.references}</SectionLabel>
        <ul className='mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium'>
          {cv.references.map(({ label, href }) => (
            <li key={label}>
              <TextLink href={href}>{label}</TextLink>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionLabel>{cv.labels.passions}</SectionLabel>
        <ul className='mt-8 flex flex-wrap gap-4 text-sm font-medium text-primary-dark'>
          {cv.passions.map(passion => (
            <li
              key={passion}
              className='flex h-16 items-center rounded-full bg-white px-8'
            >
              {passion}
            </li>
          ))}
        </ul>
      </section>
    </footer>
  )
}
