import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { Avatar, WindowBar } from './Header'
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
import {
  GradientText,
  RichText,
  SectionLabel,
  TextLink,
  TimelineDot
} from './ui'

const contactIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  website: WebsiteIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  license: CarIcon
}

/**
 * Single-column CV for phones, built from the same data as the A4 sheet,
 * which remains for larger screens, printing and the PDF.
 */
export function CvMobile({ className }: { className?: string }) {
  return (
    <article className={cx('w-full text-phone text-primary-dark', className)}>
      <header className='bg-brand-163 px-12 pt-18 pb-20'>
        <Avatar className='mx-auto' />
        <div className='mt-14 rounded-window bg-white pb-16 text-center shadow-window'>
          <WindowBar />
          <h1 className='mt-10 h-28 text-phone-xl font-semibold'>
            <GradientText baseline='27.5px' className='size-full'>
              {`${cv.firstName} ${cv.lastName}`}
            </GradientText>
          </h1>
          <p className='px-12 text-phone-lg font-semibold'>
            <RichText text={cv.title} />
          </p>
        </div>
      </header>

      <div className='space-y-24 bg-white px-12 pt-20 pb-24'>
        <p className='text-center font-semibold tracking-wide text-pretty'>
          <RichText text={cv.intro} />
        </p>

        <section aria-label='Coordonnées'>
          <SectionLabel size='phone'>Contact</SectionLabel>
          <ul className='mt-10 space-y-6 font-medium'>
            {cv.contacts.map(({ icon, label, href }) => {
              const Icon = contactIcons[icon]
              return (
                <li key={label} className='flex items-center gap-10'>
                  <span className='grid size-24 shrink-0 place-items-center rounded-full bg-tint text-primary'>
                    <Icon className='size-13' />
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
        </section>

        <section className='rounded-card bg-brand-126 px-12 pt-16 pb-20 text-white'>
          <SectionPill light>Expériences professionnelles</SectionPill>
          <ol className='mt-18 space-y-18 border-l-[2pt] border-white pl-14'>
            {cv.experiences.map(({ role, company, period, description }) => (
              <li key={role} className='relative'>
                <TimelineDot className='top-4 -left-20' />
                <h3 className='text-phone-lg font-bold'>{role}</h3>
                <p className='text-phone-sm font-medium text-white/85'>
                  {company} · {period}
                </p>
                <p className='mt-6 text-pretty text-white/92'>
                  <RichText text={description} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionPill>Études</SectionPill>
          <ol className='mt-18 space-y-16 border-l-[2pt] border-primary pl-14 text-primary'>
            {cv.education.map(({ degree, school, period, description }) => (
              <li key={degree} className='relative'>
                <TimelineDot className='top-4 -left-20' />
                <h3 className='text-phone-lg font-bold'>{degree}</h3>
                <p className='text-phone-sm font-medium text-primary/85'>
                  {[school, period].filter(Boolean).join(' · ')}
                </p>
                {description && (
                  <p className='mt-4 text-pretty'>
                    <RichText text={description} />
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionLabel size='phone'>Compétences</SectionLabel>
          <SkillGroups size='phone' className='mt-12' />
        </section>

        <section>
          <SectionLabel size='phone'>Langues</SectionLabel>
          <ul className='mt-12 flex flex-wrap gap-6 text-phone-sm font-medium'>
            {cv.languages.map(language => (
              <li
                key={language}
                className='flex h-26 items-center rounded-full bg-tint px-9'
              >
                {language}
              </li>
            ))}
          </ul>
        </section>

        <section className='space-y-20 rounded-band bg-tint p-16 text-primary'>
          <div>
            <SectionLabel size='phone'>Références clients</SectionLabel>
            <ul className='mt-10 space-y-4 font-medium'>
              {cv.references.map(({ label, href }) => (
                <li key={label}>
                  <TextLink href={href}>{label}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel size='phone'>Passions</SectionLabel>
            <ul className='mt-12 flex flex-wrap gap-6 text-phone-sm font-medium text-primary-dark'>
              {cv.passions.map(passion => (
                <li
                  key={passion}
                  className='flex h-26 items-center rounded-full bg-white px-9'
                >
                  {passion}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}

function SectionPill({
  children,
  light
}: {
  children: string
  light?: boolean
}) {
  return (
    <h2
      className={cx(
        'mx-auto flex h-28 w-fit items-center rounded-full px-18 font-semibold',
        light ? 'bg-white text-primary-deep' : 'bg-brand-96 text-tint'
      )}
    >
      {children}
    </h2>
  )
}
