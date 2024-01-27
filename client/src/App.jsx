import { useState } from 'react'

import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

import { USER } from './constants/user'

import { useMessages } from './hooks/use-messages'
import { useContacts } from './hooks/use-contacts'
import { useDiscussions } from './hooks/use-discussions'

import './App.css'

export default function App() {
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
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          setActiveContact={setActiveContact}
          onClose={setIsModalVisible}
          addNewDiscussion={addNewDiscussion}
          contacts={contacts}
          activeContact={activeContact}
        />
      )}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
            user={user}
          />
        }
        aside={
          <ChatDiscussionList
            discussions={discussions}
            setDiscussions={setDiscussions}
            loadMessages={loadMessages}
            highlightDiscussion={highlightDiscussion}
          />
        }
        main={<ChatMessageList messages={messages} />}
      />
    </>
  )
}
