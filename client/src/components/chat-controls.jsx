import { useAtom } from 'jotai'
import { Avatar } from '@nextui-org/react'

import { userAtom } from '../store/store'
import { ChatToggleContacts } from './chat-toggle-contacts'

export function ChatControls() {
  const [user] = useAtom(userAtom)

  return (
    <header className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg">
      <Avatar
        name={user.name}
        src={user.imageUrl}
        showFallback
        radius="md"
        size="lg"
      />

      <p>
        Welcome <strong>{user.name}</strong>
      </p>

      <ChatToggleContacts />
    </header>
  )
}
