import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatStartDiscussionModal({ contacts }) {
  return (
    <div className="chat-start-discussion-modal">
      <ChatContactList contacts={contacts} />

      <ChatStartDiscussionButton />
    </div>
  )
}
