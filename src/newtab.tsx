import { BorderTrail } from '@/components/motion/border-trail'
import { TextEffect } from '@/components/motion/text-effect'
import bgImage from '../assets/wallpaper-default.jpg'
import '@/style.css'

function IndexNewTab() {
  return (
    <main
      className="  flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="relative flex w-80 origin-center flex-col items-center rounded-lg bg-transparent p-6 backdrop-blur hover:shadow-md">
        <TextEffect as="h1" per="char" className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent">
          AI OS
        </TextEffect>
        <TextEffect as="h1" per="char" delay={0.3} className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-2xl text-transparent">
          An OS with AI first.
        </TextEffect>
        <BorderTrail
          className="bg-gradient-to-l from-blue-500 to-green-500"
          size={120}
        />
      </div>
    </main>
  )
}

export default IndexNewTab
