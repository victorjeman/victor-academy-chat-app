import { createContext, useState } from 'react'

import { USER } from '../constants/user'

import { useContacts } from '../hooks/use-contacts'
import { useMessages } from '../hooks/use-messages'
import { useDiscussions } from '../hooks/use-discussions'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [user] = useState(USER)
  const [activeContact, setActiveContact] = useState(null)

  const { contacts } = useContacts()
  const { messages, loadMessages } = useMessages()
  const { discussions, setDiscussions, addNewDiscussion, highlightDiscussion } =
    useDiscussions({
      user,
      activeContact,
    })

  return (
    <ChatContext.Provider
      value={{
        user,
        isModalVisible,
        activeContact,
        contacts,
        messages,
        discussions,
        setIsModalVisible,
        setActiveContact,
        loadMessages,
        setDiscussions,
        addNewDiscussion,
        highlightDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}