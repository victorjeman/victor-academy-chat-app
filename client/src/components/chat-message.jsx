export function ChatMessage({ message, isMine }) {
  return (
    <div className={`chat-message ${isMine ? 'mine' : ''}`}>
      <div className="chat-message-content">
        <p className="chat-message-text">{message.value}</p>
        <p className="chat-message-date">{message.date}</p>
        <p className="chat-message-author">{message.author}</p>
      </div>
    </div>
  )
}
