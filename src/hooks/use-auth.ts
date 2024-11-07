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
      chrome.identity.getAuthToken({ interactive: true }, (token) => {
        setAuth({
          email,
          token,
        })
      })
    })
  }
  const logout = () => {
    chrome.identity.clearAllCachedAuthTokens()
    setAuth(undefined)
  }

  return {
    auth,
    setAuth,
    login,
    logout,
  }
}
