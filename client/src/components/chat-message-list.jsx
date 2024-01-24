import { ChatMessage } from './chat-message'

export function ChatMessageList({ messages }) {
  console.log('messages: ', messages)
  return (
    <div className="chat-message-list">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}
    </div>
  )
}
