import { cv } from '../data/cv'
import { cx } from '../lib/cx'

const sizes = {
  sheet: {
    groups: 'space-y-11',
    label: 'text-sm',
    list: 'mt-4 gap-x-3 gap-y-4',
    chip: 'h-14 gap-2.5 px-5 text-sm',
    logoZoom: 0.55
  },
  phone: {
    groups: 'space-y-12',
    label: 'text-phone',
    list: 'mt-6 gap-6',
    chip: 'h-26 gap-4 px-9 text-phone-sm',
    logoZoom: 0.85
  }
}

/** Technologies by area, as chips with their logo; the main ones stand out */
export function SkillGroups({
  size,
  className
}: {
  size: keyof typeof sizes
  className?: string
}) {
  const s = sizes[size]
  return (
    <div className={cx(s.groups, className)}>
      {cv.skillGroups.map(({ label, skills }) => (
        <div key={label}>
          <h3 className={cx('font-bold text-primary-dark', s.label)}>
            {label}
          </h3>
          <ul className={cx('flex flex-wrap', s.list)}>
            {skills.map(skill => {
              const name = skill.replaceAll('**', '')
              const logo = cv.logos[name]
              return (
                <li
                  key={name}
                  className={cx(
                    'flex items-center rounded-full text-primary-dark',
                    skill.startsWith('**')
                      ? 'bg-tag font-semibold'
                      : 'bg-tint font-medium',
                    s.chip
                  )}
                >
                  {logo && (
                    <img src={logo} alt='' style={{ zoom: s.logoZoom }} />
                  )}
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
