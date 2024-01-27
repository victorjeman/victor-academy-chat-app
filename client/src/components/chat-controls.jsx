import { clsx } from 'clsx'

import { useChatContext } from '../hooks/use-chat-context'

export function ChatControls() {
  const { setIsModalVisible, isModalVisible, user } = useChatContext()

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

      <button
        className="chat-controls-btn"
        onClick={() => {
          setIsModalVisible((prev) => !prev)
        }}
      >
        Toggle contact list
      </button>

      <p>
        Current user: <strong>{user.name}</strong>
      </p>
    </div>
  )
}
