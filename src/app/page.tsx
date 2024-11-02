import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Index() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h1 className="inline bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-6xl font-bold text-transparent">AI OS</h1>
          <p className="text-xl text-gray-500">A quasi-operating system in chrome extension that integrates all functions.</p>
          <div className="mt-4 flex items-center gap-2">
            <Button disabled>Install</Button>
            <Button variant="secondary" disabled>Features</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image className="animate-bounce" src="/logo.svg" width={200} height={200} alt="Logo" />
        </div>
      </div>
    </div>
  )
}
