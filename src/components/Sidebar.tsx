import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { linkTargetProps } from '../lib/links'
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
import { DashedBorder, DashedLine, RichText, TextLink } from './ui'

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
      <ul className='flex justify-between pr-18 pl-11.25 text-sm leading-9 font-semibold text-primary/83'>
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
              <span className='absolute left-46 flex h-18 w-127 items-center justify-center text-sm font-semibold text-primary'>
                <DashedBorder
                  className='text-line'
                  dash='6pt'
                  gap='6pt'
                  radius='3pt'
                />
                {href ? (
                  <TextLink
                    href={href}
                    underline={icon === 'mail' ? 'always' : 'hover'}
                  >
                    {label}
                  </TextLink>
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
                {...linkTargetProps(href)}
                className='relative flex h-24 w-129 items-center justify-center rounded-full bg-brand-96 text-base font-semibold text-tint transition hover:brightness-110'
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

/** Technical skills, their logos and soft skills */
export function SidebarSkills({ className }: { className?: string }) {
  return (
    <aside aria-label='Compétences' className={className}>
      <DashedLine className='ml-16 h-1 w-148 text-line' />

      <SidebarHeading className='mt-17'>Compétences techniques</SidebarHeading>
      <ul className='mt-5 ml-27 w-146 space-y-5 text-sm leading-11 tracking-wide text-pretty text-primary-dark'>
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

      <ul className='mt-12 ml-18 grid w-141 grid-cols-6 gap-y-5'>
        {cv.skills.map(({ name, logo }) => (
          <li
            key={name}
            title={name}
            className='grid size-21 place-items-center justify-self-center rounded-full bg-tint'
          >
            {/* Logos are drawn at a share of the size set in their SVG file */}
            <img src={logo} alt={name} className='[zoom:0.72]' />
          </li>
        ))}
      </ul>

      <DashedLine className='mt-17 ml-16 h-1 w-148 text-line' />

      <SidebarHeading className='mt-17'>Softskills</SidebarHeading>
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

function SidebarHeading({
  children,
  className
}: {
  children: string
  className?: string
}) {
  return (
    <h2
      className={cx(
        'ml-27 flex items-center text-base font-semibold tracking-wider text-primary',
        className
      )}
    >
      {children}
      <ChevronDownIcon className='-my-[1.75pt] ml-[2.4pt] size-15.5' />
    </h2>
  )
}
