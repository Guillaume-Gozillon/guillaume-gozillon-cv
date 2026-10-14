import { cv } from '../data/cv'
import { cx } from '../lib/cx'
import { linkTargetProps } from '../lib/links'
import { Avatar, WindowBar } from './Header'
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
import { SkillGroupList, SkillLogoList } from './skills'
import {
  DashedBorder,
  GradientText,
  RichText,
  TextLink,
  TimelineDot
} from './ui'

const icons = {
  mail: MailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
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
        <div className='mt-14 rounded-window bg-white pb-14 text-center shadow-window'>
          <WindowBar />
          <h1 className='mt-10 h-28 text-phone-xl font-semibold'>
            <GradientText baseline='27.5px' className='size-full'>
              {`${cv.firstName} ${cv.lastName}`}
            </GradientText>
          </h1>
          <p className='px-12 text-phone-lg font-semibold'>
            <RichText text={cv.title} accentClassName='text-accent-bright' />
          </p>
          <p className='mt-4 text-phone-sm font-semibold text-primary/83'>
            {cv.details.join(' · ')}
          </p>
        </div>
      </header>

      <div className='space-y-24 bg-white px-12 pt-20 pb-24'>
        <p className='text-center font-semibold tracking-wide text-pretty'>
          {cv.intro}
        </p>

        <section aria-label='Coordonnées' className='space-y-14'>
          <ul className='space-y-8 font-semibold text-primary'>
            {cv.contacts.map(({ icon, label, href }) => {
              const Icon = icons[icon]
              return (
                <li key={label} className='flex items-center gap-10'>
                  <span className='grid size-26 shrink-0 place-items-center rounded-full bg-tint'>
                    <Icon className='size-14' />
                  </span>
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
                </li>
              )
            })}
          </ul>
          <ul className='grid grid-cols-2 gap-8'>
            {cv.socials.map(({ icon, label, href }) => {
              const Icon = icons[icon]
              return (
                <li key={label}>
                  <a
                    href={href}
                    {...linkTargetProps(href)}
                    className='flex h-32 items-center gap-8 rounded-full bg-brand-96 pr-10 pl-3 font-semibold text-tint transition hover:brightness-110'
                  >
                    <span className='grid size-26 shrink-0 place-items-center rounded-full bg-white text-primary'>
                      <Icon className='size-15' strokeWidth={2.25} />
                    </span>
                    <span className='underline decoration-[0.75pt] underline-offset-[1.5pt] [text-decoration-skip-ink:none]'>
                      {label}
                    </span>
                    <ChevronRightIcon className='ml-auto size-14 text-white' />
                  </a>
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
                <p className='mt-6 text-pretty text-white/92'>{description}</p>
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
                  <p className='mt-4 text-pretty'>{description}</p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading>Compétences techniques</SectionHeading>
          <SkillGroupList className='mt-10 space-y-8' />
          <SkillLogoList
            className='mt-16 flex flex-wrap gap-8'
            itemClassName='size-32'
            logoZoom={1.1}
          />
        </section>

        <section>
          <SectionHeading>Softskills</SectionHeading>
          <ul className='mt-10 flex flex-wrap gap-6 font-medium text-primary'>
            {cv.softSkills.map(skill => (
              <li
                key={skill}
                className='flex items-center gap-4 rounded-full bg-tint px-10 py-4'
              >
                <FolderIcon className='size-12' />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className='space-y-20 rounded-band bg-tint p-16 text-primary'>
          <div>
            <h2 className='text-phone-lg font-semibold tracking-wider'>
              Références, site clients
            </h2>
            <ul className='mt-8 space-y-4 font-medium'>
              {cv.references.map(({ label, href }) => (
                <li key={label}>
                  <TextLink href={href}>{label}</TextLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-phone-lg font-semibold tracking-wider'>
              Passions
            </h2>
            <ul className='mt-10 flex flex-wrap gap-6'>
              {cv.passions.map(passion => (
                <li
                  key={passion}
                  className='relative h-20 rounded-full bg-tag px-10 text-phone-sm leading-20 font-medium text-primary-dark'
                >
                  <DashedBorder
                    className='text-tag-border'
                    dash='3pt'
                    gap='3pt'
                    width='0.75pt'
                    radius='10pt'
                  />
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

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className='flex items-center gap-3 text-phone-lg font-semibold tracking-wide text-primary'>
      {children}
      <ChevronDownIcon className='size-18' />
    </h2>
  )
}
