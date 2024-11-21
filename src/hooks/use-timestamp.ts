import { useRef, useState } from 'react'

interface UseTimestampOptions {
  immediate?: boolean
}
const DEFAULT_OPTIONS: UseTimestampOptions = {
  immediate: true,
}

export function useTimestamp(options?: UseTimestampOptions) {
  const { immediate } = Object.assign({}, DEFAULT_OPTIONS, options)

  const [timestamp, setTimestamp] = useState(Date.now())
  const isActive = useRef(false)
  const rafId = useRef(null)

  const loop = () => {
    if (!window || !isActive.current) {
      return
    }

    setTimestamp(Date.now())
    rafId.current = window.requestAnimationFrame(loop)
  }
  const resume = () => {
    if (!window || isActive.current) {
      return
    }

    isActive.current = true
    rafId.current = window.requestAnimationFrame(loop)
  }
  const pause = () => {
    isActive.current = false

    if (window && rafId.current) {
      window.cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
  }

  if (immediate) {
    resume()
  }

  return {
    timestamp,
    loop,
    resume,
    pause,
  }
}
