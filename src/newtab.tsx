import { BorderTrail } from '@/components/motion/border-trail'
import { TextEffect } from '@/components/motion/text-effect'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'
import bgImage from '~assets/wallpaper-default.jpg'
import '@/style.css'

function IndexNewTab() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }

    if (theme === 'system') {
      setTheme('light')
      return
    }

    setTheme('system')
  }

  return (
    <main
      className="flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="relative flex w-80 origin-center flex-col items-center gap-4 rounded-lg bg-transparent p-6 backdrop-blur hover:shadow-md">
        <TextEffect as="h1" per="char" className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent">
          AI OS
        </TextEffect>
        <TextEffect as="h1" per="char" delay={0.3} className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-2xl text-transparent">
          An OS with AI first.
        </TextEffect>
        <div className="flex items-center gap-2">
          <a href="/tabs/desktop.html">
            <Button>
              <i className="icon-[mdi--desktop-windows]" />
              Desktop
            </Button>
          </a>
          <a rel="noreferrer noopener" href="https://github.com/AiComma/aios.git" target="_blank">
            <Button variant="secondary">
              <i className="icon-[mdi--github]" />
              Github
            </Button>
          </a>
          <Button className="text-base" size="icon" onClick={toggleTheme}>
            {
              theme === 'light'
                ? <i className="icon-[mdi--white-balance-sunny]"></i>
                : (
                    theme === 'dark'
                      ? <i className="icon-[mdi--moon-and-stars]"></i>
                      : <i className="icon-[fluent--system-24-filled]"></i>
                  )
            }
          </Button>
        </div>
        <BorderTrail
          className="bg-gradient-to-l from-blue-500 to-green-500"
          size={120}
        />
      </div>
    </main>
  )
}

export default IndexNewTab
