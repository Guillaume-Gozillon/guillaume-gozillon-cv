import { useSyncExternalStore } from 'react'

/** A4 width (210mm) in CSS pixels, and the margin kept on each side of the screen */
const SHEET_WIDTH = (210 / 25.4) * 96
const GUTTER = 16

const subscribe = (onChange: () => void) => {
  window.addEventListener('resize', onChange)
  return () => window.removeEventListener('resize', onChange)
}

const getScale = () =>
  Math.min(1, (document.documentElement.clientWidth - 2 * GUTTER) / SHEET_WIDTH)

/** Zoom factor that fits the A4 sheet in narrow screens (it is never enlarged) */
export function useSheetScale() {
  return useSyncExternalStore(subscribe, getScale)
}
