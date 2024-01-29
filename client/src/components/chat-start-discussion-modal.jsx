import { useAtom } from 'jotai'

import { isModalVisibleAtom } from '../store/store'
import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatStartDiscussionModal() {
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom)

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
