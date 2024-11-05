import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'
import '@/style.css'

function IndexPopup() {
  const { login } = useAuth()

  return (
    <div className="w-60 px-6 py-4">
      <h1 className="text-xl font-bold">AI OS</h1>
      <p className="text-sm">An OS with AI first</p>
      <Button onClick={login}>Login</Button>
    </div>
  )
}

export default IndexPopup
