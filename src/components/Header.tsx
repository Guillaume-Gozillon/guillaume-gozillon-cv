import { cx } from '../lib/cx'
import { cv } from '../data/cv'
import { GradientText, RichText } from './ui'

const windowButtons = [
  'bg-window-close ring-window-close/50',
  'bg-window-minimize ring-window-minimize/50',
  'bg-window-zoom ring-window-zoom/50'
]

/** Browser-like window holding the name and the job title */
export function WindowCard() {
  return (
    <header className='h-99 rounded-t-window bg-white'>
      <div className='flex h-11 items-center gap-4 rounded-t-window bg-window-bar pl-5 shadow-window'>
        {windowButtons.map(color => (
          <span
            key={color}
            className={cx('size-6 rounded-full ring-[1pt]', color)}
          />
        ))}
      </div>
      <h1 className='mt-8.5 h-32 text-xl font-semibold'>
        <GradientText baseline='25.5pt' className='size-full'>
          {`${cv.firstName} ${cv.lastName}`}
        </GradientText>
      </h1>
      <p className='mt-0.5 text-center text-lg font-semibold tracking-snug text-primary-dark'>
        <RichText text={cv.title} />
      </p>
    </header>
  )
}

/** Profile photo, or the initials until a photo is set in the CV data */
export function Avatar({ className }: { className?: string }) {
  const fullName = `${cv.firstName} ${cv.lastName}`
  return (
    <div
      className={cx(
        'size-79 overflow-hidden rounded-full border-[2pt] border-white bg-tint shadow-avatar',
        className
      )}
    >
      {cv.photo ? (
        <img src={cv.photo} alt={fullName} className='size-full object-cover' />
      ) : (
        <GradientText
          aria-hidden
          baseline='48.1pt'
          className='size-full text-xl font-semibold'
        >
          {cv.firstName[0] + cv.lastName[0]}
        </GradientText>
      )}
    </div>
  )
}
