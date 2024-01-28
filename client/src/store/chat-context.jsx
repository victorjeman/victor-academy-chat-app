import { createContext, useState } from 'react'

import { USER } from '../constants/user'

import { useMessages } from '../hooks/use-messages'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user] = useState(USER)
  const [activeContact, setActiveContact] = useState(null)

  const { messages, loadMessages } = useMessages()

  return (
    <ChatContext.Provider
      value={{
        user,
        isModalVisible,
        activeContact,
        messages,
        setIsModalVisible,
        setActiveContact,
        loadMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
