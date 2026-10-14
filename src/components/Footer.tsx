import { cx } from '../lib/cx'
import { cv } from '../data/cv'
import { DashedBorder } from './ui'

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cx(
        'grid grid-cols-[210pt_1fr] rounded-band bg-tint pt-10 pl-19 text-primary',
        className
      )}
    >
      <section>
        <h2 className='text-lg font-semibold tracking-wider'>
          Références, site clients
        </h2>
        <ul className='mt-4.5 pl-9 text-sm leading-16 font-medium tracking-wide'>
          {cv.references.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className='underline decoration-[0.75pt] underline-offset-[1.5pt] [text-decoration-skip-ink:none]'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-lg font-semibold tracking-wider'>Passions</h2>
        <ul className='mt-6 flex w-215 flex-wrap gap-x-10 gap-y-6 pl-4'>
          {cv.passions.map(passion => (
            <li
              key={passion}
              className='relative h-15 rounded-full bg-tag px-11.5 text-xs leading-15 font-medium tracking-wide text-primary-dark'
            >
              <DashedBorder
                className='text-tag-border'
                dash='3pt'
                gap='3pt'
                width='0.75pt'
                radius='7.5pt'
              />
              {passion}
            </li>
          ))}
        </ul>
      </section>
    </footer>
  )
}
