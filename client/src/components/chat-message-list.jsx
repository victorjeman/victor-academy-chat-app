import { useChatContext } from '../hooks/use-chat-context'
import { ChatMessage } from './chat-message'

export function ChatMessageList() {
  const { messages } = useChatContext()
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
