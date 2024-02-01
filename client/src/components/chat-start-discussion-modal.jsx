import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatStartDiscussionModal() {
  return (
    <div>
      <h2>Select the people you want to talk to</h2>

      <ChatContactList />

      <ChatStartDiscussionButton />
    </div>
  )
}
