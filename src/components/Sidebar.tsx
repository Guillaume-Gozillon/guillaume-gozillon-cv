import { cv } from '../data/cv'
import {
  CarIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WebsiteIcon
} from './icons'
import { SkillGroups } from './skills'
import { SectionLabel, TextLink } from './ui'

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  website: WebsiteIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  license: CarIcon
}

/** Contact details, written out in full so they read the same on paper */
export function SidebarProfile({ className }: { className?: string }) {
  return (
    <aside aria-label={cv.labels.contactDetails} className={className}>
      <SectionLabel>{cv.labels.contact}</SectionLabel>
      <ul className='mt-9 space-y-6 text-sm font-medium text-primary-dark'>
        {cv.contacts.map(({ icon, label, href }) => {
          const Icon = contactIcons[icon]
          return (
            <li key={label} className='flex items-center gap-6'>
              <span className='grid size-15 shrink-0 place-items-center rounded-full bg-tint text-primary'>
                <Icon className='size-9' />
              </span>
              {href ? (
                <TextLink href={href} underline='hover'>
                  {label}
                </TextLink>
              ) : (
                label
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

/** Technical skills and languages */
export function SidebarSkills({ className }: { className?: string }) {
  return (
    <aside aria-label={cv.labels.skills} className={className}>
      <SectionLabel>{cv.labels.skills}</SectionLabel>
      <SkillGroups className='mt-9' />

      <SectionLabel className='mt-26'>{cv.labels.languages}</SectionLabel>
      <ul className='mt-9 flex flex-wrap gap-x-3 gap-y-4 text-sm font-medium text-primary-dark'>
        {cv.languages.map(language => (
          <li
            key={language}
            className='flex h-14 items-center rounded-full bg-tint px-5'
          >
            {language}
          </li>
        ))}
      </ul>
    </aside>
  )
}
