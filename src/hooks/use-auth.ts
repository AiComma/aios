import { useStorage } from '@plasmohq/storage/hook'

export function useAuth() {
  const [auth, setAuth] = useStorage<{
    email?: string
    token?: string
  }>(
    'auth',
  )

  const login = () => {
    chrome.identity.getProfileUserInfo(null, ({ email }) => {
      setAuth({
        ...auth,
        email,
      })
    })

    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      setAuth({
        ...auth,
        token,
      })
    })
  }

  return {
    auth,
    setAuth,
    login,
  }
}
