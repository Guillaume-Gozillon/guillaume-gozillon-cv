import { cx } from '../lib/cx'
import { Masthead } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'

/** The CV itself: one A4 page, laid out in points, in the reading order of the PDF text */
export function CvSheet({ className }: { className?: string }) {
  return (
    <article
      data-cv-sheet
      className={cx(
        'h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white px-34 pt-40 text-ink-soft',
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
