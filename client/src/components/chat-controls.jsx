export function ChatControls({ setIsModalVisible, isModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className={`chat-controls-btn ${
          isModalVisible === false ? 'is-active' : ''
        }`}
        onClick={() => {
          setIsModalVisible(false)
        }}
      >
        Hide contact list
      </button>

      <button
        className={`chat-controls-btn ${
          isModalVisible === true ? 'is-active' : ''
        }`}
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
