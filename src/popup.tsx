import { Button } from '@/components/ui/button'
import '@/style.css'

function IndexPopup() {
  return (
    <div className="w-60 px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="text-base">Welcome to</span>
        <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-xl font-bold text-transparent">AI OS</span>
      </div>
      <p className="text-sm text-gray-500">A quasi-operating system in chrome extension that integrates all functions.</p>
      <div className="mt-2 flex items-center gap-2">
        <a href="/tabs/desktop.html" target="_blank">
          <Button variant="ghost" size="icon" className="text-base">
            <i className="icon-[mdi--desktop-windows]" />
          </Button>
        </a>
        <a href="https://ai-os.netlify.app/" target="_blank" rel="noreferrer noopener">
          <Button variant="ghost" size="icon" className="text-base">
            <i className="icon-[mdi--file-document-outline]"></i>
          </Button>
        </a>
        <a href="https://github.com/AiComma/aios.git" target="_blank" rel="noreferrer noopener">
          <Button variant="ghost" size="icon" className="text-base">
            <i className="icon-[mdi--github]" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
