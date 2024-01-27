import { ChatMessage } from './chat-message'

export function ChatMessageList({ messages = [] }) {
  return (
    <div>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}
    </div>
  )
}
