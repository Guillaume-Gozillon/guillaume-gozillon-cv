import { cv, type Skill } from '../data/cv'
import { cx } from '../lib/cx'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon
} from './icons'
import { DashedBorder, DashedLine } from './ui'

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
}

const underline =
  'underline decoration-[0.75pt] underline-offset-[1.5pt] [text-decoration-skip-ink:none]'

/** Personal details, contacts and social links */
export function SidebarProfile({ className }: { className?: string }) {
  return (
    <aside aria-label='Coordonnées' className={className}>
      <ul className='flex justify-between pr-18 pl-11.25 text-xs leading-9 font-semibold text-primary/83'>
        {cv.details.map(detail => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <ul className='mt-30.75 flex flex-col gap-11'>
        {cv.contacts.map(({ icon, label, href }) => {
          const Icon = contactIcons[icon]
          return (
            <li key={label} className='relative h-18'>
              <span className='absolute left-8 grid size-18 place-items-center rounded-full bg-tint text-primary'>
                <Icon className='size-10.5' />
              </span>
              <DashedLine
                className='absolute top-8.5 left-26 h-1 w-20 text-line'
                gap={5.5}
                offset={5}
              />
              <span className='absolute left-46 flex h-18 w-127 items-center justify-center text-xs font-semibold text-primary'>
                <DashedBorder
                  className='text-line'
                  dash='6pt'
                  gap='6pt'
                  radius='3pt'
                />
                {href ? (
                  <a href={href} className={cx(icon === 'mail' && underline)}>
                    {label}
                  </a>
                ) : (
                  label
                )}
              </span>
            </li>
          )
        })}
      </ul>

      <ul className='mt-25 ml-26 flex flex-col gap-7'>
        {cv.socials.map(({ icon, label, href }) => {
          const Icon = contactIcons[icon]
          return (
            <li key={label}>
              <a
                href={href}
                className='relative flex h-24 w-129 items-center justify-center rounded-full bg-brand-96 text-base font-semibold text-tint'
              >
                <span className='absolute top-2 left-2 grid size-20 place-items-center rounded-full bg-white text-primary'>
                  <Icon className='size-12.5' strokeWidth={2.25} />
                </span>
                <span className={underline}>{label}</span>
                {/* Negative margin: center the label on the visible chevron, not its padded box */}
                <ChevronRightIcon className='-mr-[3.8pt] ml-0.5 size-11.5 text-white' />
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

/** Skill logos and soft skills */
export function SidebarSkills({ className }: { className?: string }) {
  return (
    <aside aria-label='Compétences' className={className}>
      <DashedLine className='ml-16 h-1 w-148 text-line' />

      <ul className='mt-22.75 ml-16.5 grid w-150 grid-cols-3 gap-y-17.25'>
        {cv.skills.map(skill => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </ul>

      <DashedLine className='mt-19.25 ml-16 h-1 w-148 text-line' />

      <h2 className='mt-17 ml-27 flex items-center text-base font-semibold tracking-wider text-primary'>
        Softskills
        <ChevronDownIcon className='-my-[1.75pt] ml-[2.4pt] size-15.5' />
      </h2>
      <ul className='mt-3.25 text-sm leading-16 font-medium tracking-wide text-primary'>
        {cv.softSkills.map(skill => (
          <li key={skill} className='flex items-center gap-5.5 pl-33.5'>
            <FolderIcon className='size-9' />
            {skill}
          </li>
        ))}
      </ul>
    </aside>
  )
}

/** Logo in a circle with a ring showing the skill level */
function SkillBadge({ name, logo, level }: Skill) {
  return (
    <li className='flex flex-col items-center'>
      <span className='relative grid size-32 place-items-center rounded-full bg-tint'>
        {/* Logos are displayed at the size set in their SVG file */}
        <img src={logo} alt='' className='max-h-17 max-w-17' />
        <svg
          aria-hidden
          viewBox='0 0 32 32'
          className='absolute inset-0 size-full -rotate-90 overflow-visible'
        >
          <circle
            cx='16'
            cy='16'
            r='15.75'
            pathLength={100}
            fill='none'
            strokeWidth='1.875'
            strokeLinecap='round'
            strokeDasharray={`${level} 100`}
            className='stroke-primary/81'
          />
        </svg>
      </span>
      <span className='mt-3.75 text-xs leading-9 font-semibold tracking-wide text-ink'>
        {name}
      </span>
    </li>
  )
}
