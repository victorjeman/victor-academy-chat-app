import { createContext, useState } from 'react'

import { USER } from '../constants/user'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user] = useState(USER)
  const [activeContact, setActiveContact] = useState(null)
  const [activeDiscussion, setActiveDiscussion] = useState(null)

  return (
    <ChatContext.Provider
      value={{
        user,
        isModalVisible,
        activeContact,
        activeDiscussion,
        setIsModalVisible,
        setActiveContact,
        setActiveDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
