import { cv } from '../data/cv'
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
          className='absolute top-4.5 bottom-18.5 left-27 w-2 bg-primary'
        />
        <DashedLine
          vertical
          className='absolute top-[calc(100%-18.5pt)] left-27 h-36 w-2 text-primary'
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
            {cv.experiences.map(({ title, description }) => (
              <li key={title} className='relative'>
                <TimelineDot className='top-0.5' />
                <h3 className='text-base font-bold tracking-[0.02em]'>
                  {title}
                </h3>
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
            {cv.education.map(({ title, subtitle }) => (
              <li key={title} className='relative'>
                <TimelineDot className='top-0.5' />
                <h3 className='text-base font-bold tracking-[0.02em]'>
                  {title}
                </h3>
                <p className='mt-0.5 text-xs font-medium tracking-wide'>
                  {subtitle}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
