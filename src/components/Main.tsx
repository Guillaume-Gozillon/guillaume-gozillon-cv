import { cv } from '../data/cv'
import { RichText, SectionTitle } from './ui'

/** Work experience then education, each entry with its period on the right */
export function Main({ className }: { className?: string }) {
  return (
    <div className={className}>
      <section>
        <SectionTitle>{cv.labels.experiences}</SectionTitle>
        <ul className='mt-8 space-y-12'>
          {cv.experiences.map(({ role, company, period, description }) => (
            <li key={role}>
              <EntryHeading title={role} subtitle={company} period={period} />
              <p className='mt-2 text-body font-medium tracking-wide text-pretty'>
                <RichText text={description} />
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-22'>
        <SectionTitle>{cv.labels.education}</SectionTitle>
        <ul className='mt-8 space-y-12'>
          {cv.education.map(({ degree, school, period, description }) => (
            <li key={degree}>
              <EntryHeading title={degree} subtitle={school} period={period} />
              {description && (
                <p className='mt-2 text-body font-medium tracking-wide text-pretty'>
                  <RichText text={description} />
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

interface EntryHeadingProps {
  title: string
  subtitle: string
  period?: string
}

/** One-line heading of an experience or a degree: title · subtitle in italics, then the period on the right */
function EntryHeading({ title, subtitle, period }: EntryHeadingProps) {
  return (
    <div className='flex items-baseline justify-between gap-8'>
      <h3 className='text-md font-semibold text-ink'>
        {title}
        <span className='font-serif text-lead font-normal text-ink-soft italic'>
          {' · '}
          {subtitle}
        </span>
      </h3>
      {period && (
        <p className='shrink-0 text-sm font-medium text-muted tabular-nums'>
          {period}
        </p>
      )}
    </div>
  )
}
