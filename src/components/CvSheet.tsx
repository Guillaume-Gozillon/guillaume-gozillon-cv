import { cx } from '../lib/cx'
import { Footer } from './Footer'
import { Avatar, WindowCard } from './Header'
import { Main } from './Main'
import { SidebarProfile, SidebarSkills } from './Sidebar'
import { DashedLine } from './ui'

/** The CV itself: one A4 page, laid out in points like the original design */
export function CvSheet({ className }: { className?: string }) {
  return (
    <article
      className={cx(
        'relative h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-white',
        className
      )}
    >
      <div className='absolute inset-x-0 top-0 h-97 bg-brand-163' />

      {/* Blocks follow the reading order of the PDF text: name, contact details, then the content */}
      <WindowCard className='absolute top-12 left-177 w-411' />
      <SidebarProfile className='absolute top-106.25 left-0 w-177' />
      <div className='absolute top-111 left-177 w-411'>
        {/* Dashed sides of the window, from its header to the end of the content */}
        <DashedLine
          vertical
          dash={8}
          gap={8}
          offset={0.5}
          className='absolute -top-13 bottom-0 left-0 w-1 text-line'
        />
        <DashedLine
          vertical
          dash={8}
          gap={8}
          offset={2.5}
          className='absolute -top-13 -right-1 bottom-0 w-1 text-line'
        />
        <Main />
      </div>
      <SidebarSkills className='absolute top-327 left-0 w-177' />
      <Footer className='absolute top-736 left-8 h-100 w-580' />

      <DashedLine
        dash={8}
        gap={8}
        offset={4}
        className='absolute inset-x-0 top-103.25 h-[0.75pt] text-line'
      />
      <Avatar className='absolute top-52 left-49' />
    </article>
  )
}
