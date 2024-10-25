import { Button } from '@/components/ui/button'

import { useTheme } from '@/hooks/use-theme'
import '@/style.css'

function IndexNewTab() {
  const { setTheme } = useTheme()

  return (
    <main className="flex h-screen w-screen items-center justify-center gap-6">
      <h1>new Tab</h1>
      <Button onClick={() => setTheme('light')}>Light</Button>
      <Button onClick={() => setTheme('dark')}>Dark</Button>
    </main>
  )
}

export default IndexNewTab
