import { useState } from 'react'

import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

import './App.css'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal onClose={setIsModalVisible} />
      )}

      <ChatLayout
        controls={
          <ChatControls
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
        }
        aside={<ChatDiscussionList />}
        main={<ChatMessageList />}
      />
    </>
  )
}
