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
                    // The outline is drawn inside, so it does not widen the chip
                    'flex h-15 items-center gap-2.5 rounded-chip px-5 inset-ring-[0.75pt]',
                    skill.startsWith('**')
                      ? 'bg-accent-wash font-semibold text-ink inset-ring-accent-line'
                      : 'bg-wash inset-ring-line'
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
