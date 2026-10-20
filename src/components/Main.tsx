import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { RichText, SectionTitle, TextLink } from './ui'

/** Work experience, projects then education, each entry with its period on the right */
export function Main({ className }: { className?: string }) {
  return (
    <div className={className}>
      <section>
        <SectionTitle>{cv.labels.experiences}</SectionTitle>
        <ul className='mt-8 space-y-14'>
          {cv.experiences.map(
            ({ role, company, period, featured, description }) => (
              <li
                key={role}
                // The rule sits in the margin, so the text stays aligned with the other entries
                className={
                  featured
                    ? '-ml-8 border-l-[1.5pt] border-accent pl-6.5'
                    : undefined
                }
              >
                <EntryHeading title={role} subtitle={company} period={period} />
                <Description text={description} />
              </li>
            )
          )}
        </ul>
      </section>

      <section className='mt-22'>
        <SectionTitle>{cv.labels.projects}</SectionTitle>
        <ul className='mt-8 space-y-14'>
          {cv.projects.map(({ role, name, period, description, link }) => (
            <li key={name}>
              <EntryHeading title={role} subtitle={name} period={period} />
              <Description text={description} />
              {link && (
                <p className='mt-2 text-sm text-accent'>
                  <TextLink href={link.href}>{link.label}</TextLink>
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-22'>
        <SectionTitle>{cv.labels.education}</SectionTitle>
        <ul className='mt-8 space-y-14'>
          {cv.education.map(({ degree, school, period, description }) => (
            <li key={degree}>
              <EntryHeading title={degree} subtitle={school} period={period} />
              {description && <Description text={description} />}
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

/**
 * One-line heading of an experience, a project or a degree: the title, then the
 * company, project or school in the accent color so it can be scanned, and the
 * period on the right
 */
function EntryHeading({ title, subtitle, period }: EntryHeadingProps) {
  return (
    <div className='flex items-baseline justify-between gap-8'>
      <h3 className='text-md font-semibold text-ink'>
        <RichText text={title} />
        <span className='font-normal text-muted'>{' · '}</span>
        <span className='font-medium text-accent'>
          <RichText text={subtitle} />
        </span>
      </h3>
      {period && (
        <p className='shrink-0 text-sm font-medium text-ink-soft tabular-nums'>
          <RichText text={period} />
        </p>
      )}
    </div>
  )
}

/** Description of an entry: a paragraph, or bullet points */
function Description({ text }: { text: string | string[] }) {
  const className = 'mt-3 text-body tracking-wide text-pretty'
  return typeof text === 'string' ? (
    <p className={className}>
      <RichText text={text} />
    </p>
  ) : (
    <ul
      className={cx(className, 'list-disc space-y-2 pl-10 marker:text-muted')}
    >
      {text.map(item => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  )
}
