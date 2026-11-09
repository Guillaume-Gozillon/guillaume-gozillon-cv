import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { SkillGroups } from './skills'
import { RichText, SectionTitle, TextLink } from './ui'

/** Skills, languages, client references and interests, in the right-hand column */
export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cx('space-y-24 text-sm', className)}>
      <section>
        <SectionTitle>{cv.labels.skills}</SectionTitle>
        <SkillGroups className='mt-8' />
      </section>
      <Languages />
      <References />
      <Passions />
    </aside>
  )
}

/** Spoken languages, one per line */
export function Languages() {
  return (
    <section>
      <SectionTitle>{cv.labels.languages}</SectionTitle>
      <ul className='mt-6 space-y-2'>
        {cv.languages.map(language => (
          <li key={language}>
            <RichText text={language} />
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Websites of the clients, then the note about the employer references */
export function References() {
  return (
    <section>
      <SectionTitle>{cv.labels.references}</SectionTitle>
      <ul className='mt-6 flex flex-wrap gap-x-10 gap-y-2 text-accent'>
        {cv.references.map(({ label, href }) => (
          <li key={label}>
            <TextLink href={href}>{label}</TextLink>
          </li>
        ))}
      </ul>
      {cv.referencesNote && (
        <p className='mt-4 text-muted'>
          <RichText text={cv.referencesNote} />
        </p>
      )}
    </section>
  )
}

/** Interests */
export function Passions() {
  return (
    <section>
      <SectionTitle>{cv.labels.passions}</SectionTitle>
      {/* A line of text, the items separated by middle dots that never start a line */}
      <ul className='mt-6'>
        {cv.passions.map(passion => (
          <li
            key={passion}
            className="inline after:text-muted after:content-['\00a0·_'] last:after:content-none"
          >
            {passion}
          </li>
        ))}
      </ul>
    </section>
  )
}
