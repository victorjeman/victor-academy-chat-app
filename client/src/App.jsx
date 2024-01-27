import { useState } from 'react'

import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

import { CONTACTS } from './constants/contacts'
import { DISCUSSIONS } from './constants/discussions'
import { MESSAGES } from './constants/messages'
import { USER } from './constants/user'

import './App.css'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [contacts] = useState(CONTACTS)
  const [discussions, setDiscussions] = useState(DISCUSSIONS)
  const [messages, setMessages] = useState([])
  const [user] = useState(USER)
  const [activeContact, setActiveContact] = useState(null)

  function loadMessages(discussionId) {
    function checkDiscussionId(message) {
      return message.discussionId === discussionId
    }

    const data = MESSAGES.find(checkDiscussionId)

    setMessages(data?.messages)
  }

  function highlightDiscussion(discussionId) {
    function checkDiscussionId(discussion) {
      return discussion.id === discussionId
    }

    const activeDiscussion = discussions.find(checkDiscussionId)

    function updateDiscussion(discussion) {
      return {
        ...discussion,
        isActive: discussion.id === activeDiscussion.id,
      }
    }

    const updatedDiscussions = discussions.map(updateDiscussion)

    setDiscussions(updatedDiscussions)
  }

  function addNewDiscussion() {
    const newDiscussionId = discussions.length + 1

    const newDiscussion = {
      id: newDiscussionId,
      contacts: [
        { id: user.id, name: user.name },
        { id: activeContact.name, name: activeContact.name },
      ],
    }

    const updatedDiscussions = [...discussions, newDiscussion]

    setDiscussions(updatedDiscussions)
  }

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
