import useSWR from 'swr'

import { fetchMessages } from '../lib/api'
import { ChatMessage } from './chat-message'
import { useChatContext } from '../hooks/use-chat-context'

export function ChatMessageList() {
  const { activeDiscussion } = useChatContext()

  const { data: messages } = useSWR(
    () => `messages ${activeDiscussion?.id}`,
    () => fetchMessages('messages', activeDiscussion.id),
    { dedupingInterval: 10000 }
  )

  return (
    <div>
      {messages?.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
        />
      ))}
    </div>
  )
}
