import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { cv, type Contact, type PersonalDetail } from '../data/cv'
import {
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  NationalityIcon,
  PhoneIcon,
  RelocationIcon,
  WebsiteIcon
} from './icons'
import { RichText, TextLink } from './ui'

type IconComponent = typeof MailIcon

const contactIcons: Record<Contact['icon'], IconComponent> = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  website: WebsiteIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
}

const personalDetailIcons: Record<PersonalDetail['icon'], IconComponent> = {
  nationality: NationalityIcon,
  relocation: RelocationIcon
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
 * Contact details between two hairlines, in three aligned columns, written out
 * in full so they read the same on paper. When the CV has personal details
 * (Swiss versions), they fill the third column, and the contact details the
 * first two: the direct ones, then the profiles.
 */
function Contacts({ className }: { className?: string }) {
  const { personalDetails } = cv
  const strip = cx(
    'grid grid-cols-[repeat(3,auto)] justify-between border-y-[0.75pt] border-line py-7 text-sm text-ink-soft',
    className
  )
  const contacts = cv.contacts.map(({ icon, label, href }) => (
    <Line key={label} Icon={contactIcons[icon]}>
      {href ? (
        <TextLink href={href} underline='hover'>
          {label}
        </TextLink>
      ) : (
        label
      )}
    </Line>
  ))

  // The French and English versions keep a plain grid: only the Swiss ones
  // rely on subgrid, which the browsers released before autumn 2023 lack
  if (!personalDetails) {
    return (
      <ul
        aria-label={cv.labels.contactDetails}
        className={cx(strip, 'gap-y-4')}
      >
        {contacts}
      </ul>
    )
  }

  return (
    <div className={strip}>
      {/* Its columns are those of the strip, so all three stay evenly spaced */}
      <ul
        aria-label={cv.labels.contactDetails}
        className='col-span-2 grid grid-flow-col grid-cols-subgrid grid-rows-3 gap-y-4'
      >
        {contacts}
      </ul>
      <ul
        aria-label={cv.labels.personalDetails}
        className='grid grid-rows-3 gap-y-4'
      >
        {personalDetails.map(({ icon, label }) => (
          <Line key={label} Icon={personalDetailIcons[icon]}>
            {/* One flex item, even with a highlighted placeholder inside */}
            <span>
              <RichText text={label} />
            </span>
          </Line>
        ))}
      </ul>
    </div>
  )
}

/** A contact or personal detail, after its icon */
function Line({
  Icon,
  children
}: {
  Icon: IconComponent
  children: ReactNode
}) {
  return (
    <li className='flex items-center gap-4'>
      <Icon className='size-9 shrink-0 text-accent' />
      {children}
    </li>
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
