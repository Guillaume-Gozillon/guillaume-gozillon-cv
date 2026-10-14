import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { RichText } from './ui'

/** Technical skills by area, with their highlighted keywords */
export function SkillGroupList({ className }: { className?: string }) {
  return (
    <ul
      className={cx('tracking-wide text-pretty text-primary-dark', className)}
    >
      {cv.skillGroups.map(({ label, value, details }) => (
        <li key={label}>
          <h3 className='font-bold'>
            {label} :{' '}
            {value && (
              <span className='font-semibold'>
                <RichText text={value} />
              </span>
            )}
          </h3>
          {details?.map(detail => (
            <p key={detail.label} className='font-semibold'>
              {detail.label} : <RichText text={detail.value} />
            </p>
          ))}
        </li>
      ))}
    </ul>
  )
}

interface SkillLogoListProps {
  className?: string
  /** Size and placement of the circles */
  itemClassName: string
  /** Share of the size set in the SVG files */
  logoZoom: number
}

/** Logos of the skills, each in a light circle */
export function SkillLogoList({
  className,
  itemClassName,
  logoZoom
}: SkillLogoListProps) {
  return (
    <ul className={className}>
      {cv.skills.map(({ name, logo }) => (
        <li
          key={name}
          title={name}
          className={cx(
            'grid place-items-center rounded-full bg-tint',
            itemClassName
          )}
        >
          <img src={logo} alt={name} style={{ zoom: logoZoom }} />
        </li>
      ))}
    </ul>
  )
}
