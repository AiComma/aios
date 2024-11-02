import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import '@/style.css'

export const metadata = {
  title: 'AI OS',
  description: 'A quasi-operating system in chrome extension that integrates all functions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pt-16">
        <header className="fixed inset-0 flex h-16 items-center justify-between bg-white/50 px-6 backdrop-blur-md">
          <Link href="/" className="relative flex items-center gap-2">
            <Image src="/logo.svg" width={32} height={32} alt="Logo" />
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-3xl font-bold text-transparent">AI OS</span>
            <span className="absolute -right-6 -top-2 rounded-bl-md  rounded-tr-md bg-gradient-to-r from-orange-500 to-purple-500 p-0.5 text-xs text-white">WIP</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/policies/privacy">
              <Button variant="ghost">
                Privacy policy
              </Button>
            </Link>
            <a href="https://github.com/AiComma/aios.git" target="_blank" rel="noreferrer noopener">
              <Button variant="ghost" size="icon">
                <GitHubLogoIcon />
              </Button>
            </a>
          </div>
        </header>
        <main className="px-6">
          {children}
        </main>
      </body>
    </html>
  )
}
