import { useAuth } from '@/hooks/use-auth'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, User } from '@nextui-org/react'
import { useState } from 'react'

export default function SettingsProfile() {
  const { auth, logout, login } = useAuth()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const toLogout = (onClose: () => void) => {
    logout()
    onClose()
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <a href="/tabs/desktop.html">
          <Button isIconOnly aria-label="Back to desktop" variant="ghost" size="sm" className="text-base">
            <i className="icon-[mdi--arrow-back]"></i>
          </Button>
        </a>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
      {
        auth
          ? (
              <div className="flex flex-col gap-2">
                <Input type="email" label="Email" defaultValue={auth?.email} isReadOnly />
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  label="Token"
                  defaultValue={auth?.token}
                  isReadOnly
                  endContent={(
                    <button className="focus:outline-none" type="button" onClick={() => setPasswordVisible(!passwordVisible)} aria-label="toggle password visibility">
                      {passwordVisible
                        ? (
                            <i className="icon-[mdi--eye-off-outline]"></i>
                          )
                        : (
                            <i className="icon-[mdi--eye-outline]"></i>
                          )}
                    </button>
                  )}
                />
                <div className="flex items-center justify-end">
                  <Button color="danger" onClick={onOpen}>Logout</Button>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {onClose => (
                      <>
                        <ModalHeader className="text-xl font-bold">Logout</ModalHeader>
                        <ModalBody>
                          <p className="text-base">Are you sure you want to log out? This will clear all login information, including tokens.</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button variant="light" onPress={onClose}>
                            Close
                          </Button>
                          <Button color="danger" onPress={() => toLogout(onClose)}>
                            Logout
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            )
          : (
              <div className="flex items-center justify-between">
                <User name="Not logged in" />
                <Button color="primary" onClick={login}>Login</Button>
              </div>
            )
      }
    </div>
  )
}
