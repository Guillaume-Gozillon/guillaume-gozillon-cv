import { cx } from '../lib/cx'
import { Footer } from './Footer'
import { Avatar, WindowCard } from './Header'
import { Main } from './Main'
import { SidebarProfile, SidebarSkills } from './Sidebar'

/** The CV itself: one A4 page, laid out in points like the original design */
export function CvSheet({ className }: { className?: string }) {
  return (
    <article
      data-cv-sheet
      className={cx(
        'relative h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white',
        className
      )}
    >
      <div className='absolute inset-x-0 top-0 h-97 bg-brand-163' />

      {/* Blocks follow the reading order of the PDF text: name, contact details, then the content */}
      <WindowCard className='absolute top-12 left-177 w-411' />
      <SidebarProfile className='absolute top-146 left-16 w-150' />
      <div className='absolute top-111 left-177 w-411'>
        <Main />
      </div>
      <SidebarSkills className='absolute top-333 left-16 w-150' />
      <Footer className='absolute top-736 left-8 h-100 w-580' />
      <Avatar className='absolute top-52 left-49' />
    </article>
  )
}
