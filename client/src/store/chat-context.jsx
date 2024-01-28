import { createContext, useState } from 'react'

import { USER } from '../constants/user'

import { useMessages } from '../hooks/use-messages'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user] = useState(USER)
  const [activeContact, setActiveContact] = useState(null)
  const [activeDiscussion, setActiveDiscussion] = useState(null)

  const { messages, loadMessages } = useMessages()

  return (
    <ChatContext.Provider
      value={{
        user,
        isModalVisible,
        activeContact,
        activeDiscussion,
        messages,
        setIsModalVisible,
        setActiveContact,
        setActiveDiscussion,
        loadMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
