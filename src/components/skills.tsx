import { cv } from '../data/cv'
import { cx } from '../lib/cx'

/** Technologies by area, as chips with their logo; the main ones stand out */
export function SkillGroups({ className }: { className?: string }) {
  return (
    <div className={cx('space-y-14', className)}>
      {cv.skillGroups.map(({ label, skills }) => (
        <div key={label}>
          <h3 className='text-xs font-bold tracking-wider text-muted uppercase'>
            {label}
          </h3>
          <ul className='mt-5 flex flex-wrap gap-x-3 gap-y-4'>
            {skills.map(skill => {
              const name = skill.replaceAll('**', '')
              const logo = cv.logos[name]
              return (
                <li
                  key={name}
                  className={cx(
                    'flex h-15 items-center gap-2.5 rounded-full px-5',
                    skill.startsWith('**')
                      ? 'bg-wash-strong font-semibold text-ink'
                      : 'bg-wash'
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
