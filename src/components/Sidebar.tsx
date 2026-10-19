import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { SkillGroups } from './skills'
import { SectionTitle, TextLink } from './ui'

/** Skills, languages, client references and interests, in the right-hand column */
export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cx('space-y-24 text-sm font-medium', className)}>
      <section>
        <SectionTitle>{cv.labels.skills}</SectionTitle>
        <SkillGroups className='mt-8' />
      </section>

      <section>
        <SectionTitle>{cv.labels.languages}</SectionTitle>
        <ul className='mt-6 space-y-2'>
          {cv.languages.map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>{cv.labels.references}</SectionTitle>
        <ul className='mt-6 flex flex-wrap gap-x-10 gap-y-2 text-accent'>
          {cv.references.map(({ label, href }) => (
            <li key={label}>
              <TextLink href={href}>{label}</TextLink>
            </li>
          ))}
        </ul>
      </section>

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
    </aside>
  )
}
