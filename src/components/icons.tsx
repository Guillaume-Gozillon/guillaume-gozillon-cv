import type { SVGProps } from 'react'

// Outline icons adapted from Tabler Icons (MIT, https://tabler.io/icons).
// They are drawn with `currentColor`, so their color comes from the theme.

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

export const MailIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x='3' y='5' width='18' height='14' rx='1' />
    <path d='m3 5 18 14M21 5 3 19' />
  </Icon>
)

export const PhoneIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2' />
  </Icon>
)

export const LocationIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx='12' cy='9.5' r='2.5' />
    <path d='M7.4 14.1a6.5 6.5 0 1 1 9.2 0L12 18.7Z' />
    <path d='M8 21.5h8' />
  </Icon>
)

export const LinkedinIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 1 0-4 0' />
    <rect x='3' y='3' width='18' height='18' rx='3' />
  </Icon>
)

export const GithubIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
  </Icon>
)

export const CarIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0' />
    <path d='M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6' />
  </Icon>
)

export const WebsiteIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3.6 9h16.8M3.6 15h16.8' />
    <path d='M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18' />
  </Icon>
)

export const DownloadIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12' />
  </Icon>
)

export const LanguageIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d='M9 6.371c0 4.418-2.239 6.629-5 6.629M4 6.371h7M5 9c0 2.144 2.252 3.908 6 4M12 20l4-9 4 9M19.1 18h-6.2M6.694 3l.793.582' />
  </Icon>
)
