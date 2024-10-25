import "@/style.css"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

function IndexNewTab() {
  const { setTheme } = useTheme()

  return (
    <main className="h-screen w-screen flex items-center justify-center gap-6">
      <h1>new Tab</h1>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </main>
  )
}

export default IndexNewTab
