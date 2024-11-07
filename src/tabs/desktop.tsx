/* eslint-disable antfu/no-import-node-modules-by-path */
import { BorderTrail } from '@/components/motion/border-trail'
import { useApps } from '@/hooks/use-apps'
import bgImage from '~assets/wallpaper-default.jpg'
import { useEventListener, useSize } from 'ahooks'
import { useCallback, useMemo, useRef } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import '@/style.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

function TabDesktop() {
  const { apps, setApps } = useApps()
  const innerRef = useRef<HTMLDivElement>()
  const size = useSize(() => innerRef.current?.firstElementChild)
  const onLayoutChange = (layout) => {
    setApps(layout.map((item) => {
      const app = apps.find(a => a.i === item.i)

      return ({
        ...app,
        ...item,
      })
    }))
  }

  const timer = useRef(null)
  const targetUrl = useRef(null)
  const onPointerDown = useCallback((url: string) => {
    targetUrl.current = url
    timer.current = setTimeout(() => {
      clearTimeout(timer.current)
      timer.current = null
      targetUrl.current = null
    }, 300)
  }, [timer, targetUrl])
  useEventListener('pointerup', () => {
    if (!timer.current) {
      return
    }

    clearTimeout(timer.current)
    timer.current = null

    targetUrl.current && window.open(targetUrl.current)
    targetUrl.current = null
  })

  const appsCards = useMemo(() => apps.map((app) => {
    return (
      <div
        key={app.i}
        data-grid={{ ...app }}
        className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-white/40 p-2 backdrop-blur"
        onPointerDown={() => onPointerDown(app.url)}
      >
        <img src={app.icon} className="w-2/3" />
        <label className="text-xs">{app.label}</label>
        <BorderTrail
          className="bg-gradient-to-l from-blue-500 to-green-500"
        />
      </div>
    )
  }), [apps, onPointerDown])

  return (
    <main
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <ResponsiveGridLayout
        autoSize={false}
        rowHeight={size?.width}
        innerRef={innerRef}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 14, md: 12, sm: 10, xs: 8, xxs: 6 }}
        margin={{
          lg: [32, 32],
          md: [16, 16],
          sm: [8, 8],
          xs: [4, 4],
          xxs: [2, 2],
        }}
        compactType={null}
        onLayoutChange={onLayoutChange}
      >
        {appsCards}
      </ResponsiveGridLayout>
    </main>
  )
}

export default TabDesktop
