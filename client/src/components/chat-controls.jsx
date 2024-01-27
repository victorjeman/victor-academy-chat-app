import { clsx } from 'clsx'

export function ChatControls({ setIsModalVisible, isModalVisible }) {
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
    </div>
  )
}
