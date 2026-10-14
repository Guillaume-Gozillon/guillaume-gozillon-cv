import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { DashedLine, RichText, SectionTitle, TimelineDot } from './ui'

export function Main() {
  return (
    <>
      <p className='mt-1 ml-28.75 w-360 text-center text-sm font-semibold tracking-wider text-primary-dark'>
        {cv.intro}
      </p>
      <SectionTitle className='mt-9 ml-123'>
        Compétences techniques
      </SectionTitle>

      {/* Timeline: the line runs from the first dot to the last one, then fades out in dashes */}
      <div className='relative mt-17.5 pr-32 pl-43'>
        <span
          aria-hidden
          className='absolute top-4.5 bottom-0 left-27 w-2 bg-primary'
        />

        <ul className='flex flex-col gap-9 text-primary-dark'>
          {cv.skillGroups.map(({ label, value, details }) => (
            <li key={label} className='relative'>
              <TimelineDot className='-top-1.75' />
              <p className='text-sm leading-9'>
                <strong className='font-bold'>{label} :</strong>{' '}
                {value && (
                  <span className='text-xs leading-9 font-semibold tracking-wide'>
                    <RichText text={value} />
                  </span>
                )}
              </p>
              {details?.map(detail => (
                <p
                  key={detail.label}
                  className='pl-6.5 text-xs leading-9 font-semibold tracking-wide'
                >
                  {detail.label} : <RichText text={detail.value} />
                </p>
              ))}
            </li>
          ))}
        </ul>

        <section className='relative mt-10 -ml-29 w-387 rounded-card bg-brand-126 pt-14 pr-4 pb-9.25 pl-29'>
          <span
            aria-hidden
            className='absolute inset-y-0 left-13 w-2 bg-white'
          />
          <SectionTitle light className='ml-85'>
            Expériences professionnelles
          </SectionTitle>
          <ul className='mt-14.25 flex flex-col gap-11.25 text-white'>
            {cv.experiences.map(({ role, company, period, description }) => (
              <li key={role} className='relative'>
                <TimelineDot className='top-0.5' />
                <EntryHeading
                  title={role}
                  subtitle={company}
                  period={period}
                  mutedClassName='text-white/85'
                />
                {/* This width reproduces the line breaks of the original design */}
                <p className='mt-2.5 w-[335.4pt] text-xs font-medium tracking-wide text-white/92'>
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Positioned like its siblings, so the PDF text keeps the reading order */}
        <section className='relative mt-16'>
          <SectionTitle className='ml-92'>Études</SectionTitle>
          <ul className='mt-10.25 flex flex-col gap-7 text-primary'>
            {cv.education.map(
              ({ degree, school, period, description }, index) => (
                <li key={degree} className='relative'>
                  {index === cv.education.length - 1 && <TimelineEnd />}
                  <TimelineDot className='top-0.5' />
                  <EntryHeading
                    title={degree}
                    subtitle={school}
                    period={period}
                    mutedClassName='text-primary/85'
                  />
                  {description && (
                    <p className='mt-0.5 text-xs font-medium tracking-wide'>
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
    <div className='flex w-[335.4pt] items-baseline justify-between gap-8'>
      <h3 className='text-base font-bold tracking-[0.02em]'>
        {title}
        <span className={cx('font-medium tracking-wide', mutedClassName)}>
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
    <span aria-hidden className='absolute top-5.5 -left-16 h-36 w-2 bg-white'>
      <DashedLine vertical className='size-full text-primary' />
    </span>
  )
}
