import { useAtom } from 'jotai'
import { clsx } from 'clsx'
import { Button } from '@nextui-org/react'

import { isModalVisibleAtom, userAtom } from '../store/store'

export function ChatControls() {
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom)
  const [user] = useAtom(userAtom)

  return (
    <div className="chat-controls">
      <button
        className={clsx('chat-controls-btn', !isModalVisible && 'is-active')}
        onClick={() => {
          setIsModalVisible(false)
        }}
      >
        Hide contact list
      </button>

      <button
        className={clsx('chat-controls-btn', isModalVisible && 'is-active')}
        onClick={() => {
          setIsModalVisible(true)
        }}
      >
        Show contact list
      </button>

      <Button onClick={() => setIsModalVisible((prev) => !prev)}>
        Toggle contact list
      </Button>

      <p className="text-blue-800 text-xl">
        Current user: <strong>{user.name}</strong>
      </p>
    </div>
  )
}
