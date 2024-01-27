import { useState } from 'react'

import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

import { CONTACTS } from './constants/contacts'
import { DISCUSSIONS } from './constants/discussions'

import './App.css'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [contacts] = useState(CONTACTS)
  const [discussions] = useState(DISCUSSIONS)

  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          onClose={setIsModalVisible}
          contacts={contacts}
        />
      )}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        }
        aside={<ChatDiscussionList discussions={discussions} />}
        main={<ChatMessageList />}
      />
    </>
  )
}
