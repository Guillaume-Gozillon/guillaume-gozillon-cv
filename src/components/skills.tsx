import { cv } from '../data/cv'
import { cx } from '../lib/cx'

/** Technologies by area, as chips with their logo; the main ones stand out */
export function SkillGroups({ className }: { className?: string }) {
  return (
    <div className={cx('space-y-11', className)}>
      {cv.skillGroups.map(({ label, skills }) => (
        <div key={label}>
          <h3 className={'text-sm font-bold text-primary-dark'}>{label}</h3>
          <ul className={'mt-4 flex flex-wrap gap-x-3 gap-y-4'}>
            {skills.map(skill => {
              const name = skill.replaceAll('**', '')
              const logo = cv.logos[name]
              return (
                <li
                  key={name}
                  className={cx(
                    'flex h-14 items-center gap-2.5 rounded-full px-5 text-sm text-primary-dark',
                    skill.startsWith('**')
                      ? 'bg-tag font-semibold'
                      : 'bg-tint font-medium'
                  )}
                >
                  {logo && <img src={logo} alt='' style={{ zoom: 0.55 }} />}
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
