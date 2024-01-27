import { useContext } from 'react'

import { ChatContext } from '../store/chat-context'

export function useChatContext() {
  const context = useContext(ChatContext)

  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider')
  }

  return context
}
