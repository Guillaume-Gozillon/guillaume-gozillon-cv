import { cx } from '../lib/cx'
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
import { RichText, TextLink } from './ui'

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  website: WebsiteIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  license: CarIcon
}

/** Name, job title and introduction, with the photo on the right, then the contact details */
export function Masthead({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className='flex items-start gap-24'>
        <div className='flex-1'>
          <h1 className='text-display font-semibold tracking-tight text-ink'>
            {`${cv.firstName} ${cv.lastName}`}
          </h1>
          <p className='mt-3 text-lg font-medium text-ink'>
            <RichText text={cv.title} />
          </p>
          <p className='mt-12 text-lead text-ink-soft'>
            <RichText text={cv.intro} />
          </p>
        </div>
        <Avatar />
      </div>
      <Contacts className='mt-18' />
    </header>
  )
}

/**
 * Contact details between two hairlines, in aligned columns, written out in
 * full so they read the same on paper
 */
function Contacts({ className }: { className?: string }) {
  return (
    <ul
      aria-label={cv.labels.contactDetails}
      className={cx(
        'grid grid-cols-[repeat(4,auto)] justify-between gap-y-4 border-y-[0.75pt] border-line py-7 text-sm text-ink-soft',
        className
      )}
    >
      {cv.contacts.map(({ icon, label, href }) => {
        const Icon = contactIcons[icon]
        return (
          <li key={label} className='flex items-center gap-4'>
            <Icon className='size-9 shrink-0 text-accent' />
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
  )
}

/** Profile photo, or the initials until a photo is set in the CV data */
function Avatar() {
  const fullName = `${cv.firstName} ${cv.lastName}`
  return (
    <div className='grid size-88 shrink-0 place-items-center overflow-hidden rounded-full bg-wash ring-[0.75pt] ring-line ring-offset-[3pt]'>
      {cv.photo ? (
        <img src={cv.photo} alt={fullName} className='size-full object-cover' />
      ) : (
        <span aria-hidden className='text-display font-semibold text-ink'>
          {cv.firstName[0] + cv.lastName[0]}
        </span>
      )}
    </div>
  )
}
