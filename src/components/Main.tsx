import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { DashedLine, SectionTitle, TimelineDot } from './ui'

export function Main() {
  return (
    <>
      <p className='mt-1 ml-28.75 w-360 text-center text-sm font-semibold tracking-wider text-primary-dark'>
        {cv.intro}
      </p>

      {/* Timeline: starts behind the experiences card, then fades out in dashes after the last degree */}
      <div className='relative mt-16 pr-22 pl-43'>
        <span
          aria-hidden
          className='absolute inset-y-0 left-27 w-2 bg-primary'
        />

        <section className='relative -ml-29 w-387 rounded-card bg-brand-126 pt-14 pr-12 pb-12 pl-29'>
          <span
            aria-hidden
            className='absolute inset-y-0 left-13 w-2 bg-white'
          />
          <SectionTitle light className='ml-88'>
            Expériences professionnelles
          </SectionTitle>
          <ul className='mt-14 flex flex-col gap-14 text-white'>
            {cv.experiences.map(({ role, company, period, description }) => (
              <li key={role} className='relative'>
                <TimelineDot className='top-1.5 -left-20' />
                <EntryHeading
                  title={role}
                  subtitle={company}
                  period={period}
                  mutedClassName='text-white/85'
                />
                <p className='mt-2 text-body font-medium tracking-wide text-pretty text-white/92'>
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Positioned like its siblings, so the PDF text keeps the reading order */}
        <section className='relative mt-16'>
          <SectionTitle className='ml-88'>Études</SectionTitle>
          <ul className='mt-12 flex flex-col gap-10 text-primary'>
            {cv.education.map(
              ({ degree, school, period, description }, index) => (
                <li key={degree} className='relative'>
                  {index === cv.education.length - 1 && <TimelineEnd />}
                  <TimelineDot className='top-1.5 -left-20' />
                  <EntryHeading
                    title={degree}
                    subtitle={school}
                    period={period}
                    mutedClassName='text-primary/85'
                  />
                  {description && (
                    <p className='mt-1 text-body font-medium tracking-wide text-pretty'>
                      {description}
                    </p>
                  )}
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </>
  )
}

interface EntryHeadingProps {
  title: string
  subtitle: string
  period?: string
  /** Color of the subtitle and the period, more discreet than the title */
  mutedClassName: string
}

/** One-line heading of an experience or a degree: title · subtitle, then the period on the right */
function EntryHeading({
  title,
  subtitle,
  period,
  mutedClassName
}: EntryHeadingProps) {
  return (
    <div className='flex items-baseline justify-between gap-8'>
      <h3 className='text-md font-bold tracking-[0.02em]'>
        {title}
        <span
          className={cx('text-base font-medium tracking-wide', mutedClassName)}
        >
          {' · '}
          {subtitle}
        </span>
      </h3>
      {period && (
        <p
          className={cx(
            'shrink-0 text-sm leading-none font-medium tracking-wide',
            mutedClassName
          )}
        >
          {period}
        </p>
      )}
    </div>
  )
}

/** End of the timeline: hides the solid line below the last dot and fades it out in dashes */
function TimelineEnd() {
  return (
    <span aria-hidden className='absolute top-6.5 -left-16 h-28 w-2 bg-white'>
      <DashedLine vertical className='size-full text-primary' />
    </span>
  )
}
