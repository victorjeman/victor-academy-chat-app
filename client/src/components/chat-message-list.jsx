import useSWR from 'swr'

import { fetchMessages } from '../lib/api'
import { ChatMessage } from './chat-message'

export function ChatMessageList() {
  const { data: messages } = useSWR(
    () => `messages`,
    () => fetchMessages('messages'),
    { dedupingInterval: 10000 }
  )

  return (
    <div className="flex-grow overflow-y-auto">
      {messages?.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}
    </div>
  )
}
