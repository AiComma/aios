import { useStorage } from '@plasmohq/storage/hook'

import { useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useStorage<'system' | 'light' | 'dark'>(
    'theme',
    v => (v === undefined ? 'system' : v),
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return {
    theme,
    setTheme,
  }
}
