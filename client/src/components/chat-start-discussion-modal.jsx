import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatStartDiscussionModal({
  onClose,
  setActiveContact,
  addNewDiscussion,
  contacts,
  activeContact,
}) {
  return (
    <div className="chat-modal">
      <h2>Select the people you want to talk to</h2>

      <ChatContactList
        setActiveContact={setActiveContact}
        contacts={contacts}
        activeContact={activeContact}
      />

      <ChatStartDiscussionButton
        addNewDiscussion={addNewDiscussion}
        onClose={onClose}
      />

      <button
        className="chat-modal-close-button"
        onClick={() => onClose(false)}
      >
        Close
      </button>
    </div>
  )
}
