import Profile from '@/components/settings/profile'
import { Card, CardBody, NextUIProvider, Tab, Tabs } from '@nextui-org/react'
import '@/style.css'

export default function SettingsApp() {
  return (
    <NextUIProvider>
      <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-zinc-900">
        <Tabs aria-label="Settings" isVertical>
          <Tab
            key="profile"
            title={(
              <div className="flex w-32 items-center gap-1 text-base">
                <i className="icon-[iconamoon--profile]"></i>
                <span className="text-sm">Profile</span>
              </div>
            )}
          >
            <Card className="w-96">
              <CardBody>
                <Profile />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </NextUIProvider>
  )
}
