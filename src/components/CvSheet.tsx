import { cx } from '../lib/cx'
import { Footer } from './Footer'
import { Avatar, WindowCard } from './Header'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
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

      <div className='absolute top-12 left-177 w-411'>
        <WindowCard />
        {/* Dashed sides of the window, below its header */}
        <DashedLine
          vertical
          dash={8}
          gap={8}
          offset={0.5}
          className='absolute top-86 left-0 h-567 w-1 text-line'
        />
        <DashedLine
          vertical
          dash={8}
          gap={8}
          offset={2.5}
          className='absolute top-86 -right-1 h-567 w-1 text-line'
        />
        <Main />
      </div>

      <DashedLine
        dash={8}
        gap={8}
        offset={4}
        className='absolute inset-x-0 top-103.25 h-[0.75pt] text-line'
      />
      <Avatar className='absolute top-52 left-49' />
      <Sidebar className='absolute top-106.25 left-0 w-177' />
      <Footer className='absolute top-736 left-8 h-100 w-580' />
    </article>
  )
}
