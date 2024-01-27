import { useState } from 'react'

import { fetchMessages } from '../lib/api'

export function useMessages() {
  const [messages, setMessages] = useState([])

  async function loadMessages(discussionId) {
    const data = await fetchMessages(discussionId)
    setMessages(data)
  }

  return { messages, loadMessages }
}
