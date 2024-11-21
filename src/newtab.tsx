import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { useState } from 'react'
import bgImage from 'url:../assets/wallpaper-default.jpg'
import { SEARCH_ENGINES } from './constants/search'
import { useTimestamp } from './hooks/use-timestamp'
import { formatDate } from './utils/date'
import '@/style.css'

export default function IndexNewTab() {
  const { timestamp } = useTimestamp()

  const [engine, setEngine] = useState(SEARCH_ENGINES.GOOGLE)
  const [engineKey, setEngineKey] = useState(new Set([SEARCH_ENGINES.GOOGLE.label]))

  const [focusSearch, setFocusSearch] = useState(false)

  const [searchKey, setSearchKey] = useState('')
  const search = () => {
    window.open(engine.url + searchKey, '_blank')
  }

  return (
    <main
      className="relative flex h-screen w-screen justify-center bg-cover bg-no-repeat pt-20"
    >
      <img className="absolute inset-0 z-[-1] size-full object-cover" src={bgImage as string} />
      <div>
        <div className="mb-4 text-center text-2xl font-semibold text-white">
          {formatDate(timestamp)}
        </div>
        <div className={`flex h-10 w-80 items-center gap-2 rounded-full bg-white/50 px-2 py-1 backdrop-blur transition-width ${focusSearch ? 'w-96' : ''}`}>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Button isIconOnly variant="light" size="sm" radius="full" aria-label={engine.label}>
                <i className={`${engine.icon} size-5`} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={engineKey}
              onSelectionChange={(keys: Set<string>) => setEngineKey(keys)}
              onAction={key => setEngine(Object.values(SEARCH_ENGINES).find(item => item.label === key))}
            >
              {
                Object.values(SEARCH_ENGINES).map(item => <DropdownItem key={item.label} startContent={<i className={`${item.icon} size-6`} />} description={item.url}>{item.label}</DropdownItem>)
              }
            </DropdownMenu>
          </Dropdown>
          <input className="flex-1 bg-transparent text-base  focus:outline-none" value={searchKey} onInput={e => setSearchKey(e.currentTarget.value)} placeholder="Search" onFocus={() => setFocusSearch(true)} onBlur={() => setFocusSearch(false)} onKeyDown={e => e.key === 'Enter' && search()} />
          <Button isIconOnly variant="light" size="sm" radius="full" color={focusSearch ? 'primary' : 'default'} aria-label="Search" onClick={search}>
            <i className="icon-[mdi--search] size-5" />
          </Button>
        </div>
      </div>
    </main>
  )
}
