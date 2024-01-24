import { useState } from 'react'

import { ChatControls } from './chat-controls'
import { ChatDiscussionList } from './chat-discussion-list'
import { ChatMessageList } from './chat-message-list'
import { ChatStartDiscussionModal } from './chat-start-discussion-modal'

// hard coded data
import { CONTACTS } from '../constants/contacts'
import { DISCUSSIONS } from '../constants/discussions'
import { MESSAGES } from '../constants/messages'

export function ChatApp() {
  const [contacts, setContacts] = useState(CONTACTS)
  const [discussions, setDiscussions] = useState(DISCUSSIONS)
  const [messages, setMessages] = useState(MESSAGES[0])
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="chat-app">
      {isModalVisible && <ChatStartDiscussionModal contacts={contacts} />}

      <div className="chat-app-top">
        <ChatControls />
      </div>

      <div className="chat-app-aside">
        <ChatDiscussionList discussions={discussions} />
      </div>

      <div className="chat-app-main">
        <ChatMessageList messages={messages.messages} />
      </div>
    </div>
  )
}
