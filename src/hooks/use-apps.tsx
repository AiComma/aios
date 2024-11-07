import { Storage } from '@plasmohq/storage'
import { useStorage } from '@plasmohq/storage/hook'
import iconGithub from '~assets/icons/github.png'
import iconSettings from '~assets/icons/settings.png'

interface App {
  i: string
  label: string
  url: string
  icon: string
  w: number
  h: number
  x: number
  y: number
  isDraggable: boolean
  isResizable: boolean
  isBounded: boolean
}

export const APPS_DEFAULT: App[] = [
  {
    i: 'settings',
    label: 'Settings',
    url: '/tabs/settings.html',
    icon: iconSettings as unknown as string,
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    isDraggable: true,
    isResizable: false,
    isBounded: true,
  },
  {
    i: 'github',
    label: 'Github',
    url: 'https://github.com/AiComma/aios',
    icon: iconGithub as unknown as string,
    w: 1,
    h: 1,
    x: 0,
    y: 1,
    isDraggable: true,
    isResizable: false,
    isBounded: true,
  },
]

export function useApps() {
  const [apps, setApps] = useStorage<App[]>(
    {
      key: 'apps',
      instance: new Storage({
        area: 'local',
        allCopied: true,
      }),
    },
    v => (v === undefined ? APPS_DEFAULT : v),
  )

  const addApp = (app: App) => {
    if (apps.find(item => item.i === app.i)) {
      return
    }

    setApps([...apps, app])
  }

  return {
    apps,
    setApps,
    addApp,
  }
}
