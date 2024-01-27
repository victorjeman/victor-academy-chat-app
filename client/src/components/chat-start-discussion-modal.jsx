import { useChatContext } from '../hooks/use-chat-context'

import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatStartDiscussionModal() {
  const { setIsModalVisible, isModalVisible } = useChatContext()

  return isModalVisible ? (
    <div className="chat-modal">
      <h2>Select the people you want to talk to</h2>

      <ChatContactList />

      <ChatStartDiscussionButton />

      <button
        className="chat-modal-close-button"
        onClick={() => setIsModalVisible(false)}
      >
        Close
      </button>
    </div>
  ) : null
}
