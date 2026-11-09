import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { isAts } from '../lib/layout'
import { Masthead } from './Header'
import { Main } from './Main'
import { Languages, Passions, References, Sidebar } from './Sidebar'
import { SkillLines } from './skills'
import { SectionTitle } from './ui'

/** The CV itself: one A4 page, laid out in points, in the reading order of the PDF text */
export function CvSheet({ className }: { className?: string }) {
  if (isAts) return <AtsSheet className={className} />

  return (
    <article
      data-cv-sheet
      className={cx(
        'h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white px-34 text-ink-soft',
        // The personal details of the Swiss versions add a line to the header:
        // their sheet starts higher, so that some margin is left at the bottom
        cv.personalDetails ? 'pt-32' : 'pt-40',
        className
      )}
    >
      <Masthead />
      <div className='mt-22 grid grid-cols-[1fr_164pt] gap-x-12'>
        <Main />
        <Sidebar className='border-l-[0.75pt] border-line pl-12' />
      </div>
    </article>
  )
}

/**
 * The same CV in a single column, for applicant tracking systems: nothing sits
 * side by side, so the text is read in order whatever the parser. It is as long
 * as its content and flows over two pages, whose margins are those of the
 * `ats` page (src/index.css); a title or an entry is never cut between them.
 */
function AtsSheet({ className }: { className?: string }) {
  return (
    <article
      data-cv-sheet
      className={cx(
        'min-h-[297mm] w-[210mm] shrink-0 bg-white px-34 py-36 text-ink-soft print:min-h-0 print:py-0 print:[page:ats] [&_h2]:break-inside-avoid [&_h2]:break-after-avoid [&_li]:break-inside-avoid',
        className
      )}
    >
      <Masthead />
      {/* The skills first: on the designed sheet too, they are seen from the top */}
      <section className='mt-22 text-body'>
        <SectionTitle>{cv.labels.skills}</SectionTitle>
        <SkillLines className='mt-8' />
      </section>
      <Main className='mt-22' />
      <div className='mt-22 space-y-22 text-body'>
        <Languages />
        <References />
        <Passions />
      </div>
    </article>
  )
}
