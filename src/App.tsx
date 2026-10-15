import type { CSSProperties } from 'react'
import { CvSheet } from './components/CvSheet'
import { Toolbar } from './components/Toolbar'
import { useSheetScale } from './lib/useSheetScale'

export default function App() {
  const scale = useSheetScale()

  return (
    <div className='flex min-h-screen flex-col items-center-safe gap-12 bg-page py-12 sm:gap-18 sm:py-30 print:block print:min-h-0 print:bg-transparent print:p-0'>
      <Toolbar className='print:hidden' />

      {/*
        The A4 sheet, on every screen and for printing and the PDF. Below its
        width it is scaled down to fit, like in a PDF viewer, after being laid
        out at full size, so the line breaks never change.
      */}
      <div
        style={{ '--scale': scale } as CSSProperties}
        className='h-[calc(297mm*var(--scale))] w-[calc(210mm*var(--scale))] print:block print:h-auto print:w-auto'
      >
        <CvSheet className='origin-top-left scale-(--scale) shadow-sheet print:scale-100 print:shadow-none' />
      </div>
    </div>
  )
}
