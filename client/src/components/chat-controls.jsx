import { useAtom } from 'jotai'
import { Avatar, Switch } from '@nextui-org/react'

import { isModalVisibleAtom, userAtom } from '../store/store'

export function ChatControls() {
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom)
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

      <Switch
        defaultSelected
        onValueChange={setIsModalVisible}
        isSelected={isModalVisible}
      >
        Toggle contact list
      </Switch>
    </header>
  )
}
