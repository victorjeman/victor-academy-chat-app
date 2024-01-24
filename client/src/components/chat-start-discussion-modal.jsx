import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

/*
 * 1. Voi primi lista de contacte in props.
 * 2. Voi afisa lista de contacte folosind componenta ChatContactList.
 * 3. Voi primi functia ce trebuie apelata cand apas pe butonul "Start discussion".
 * 4. Voi transmite mai departe functia catre componenta ChatStartDiscussionButton.
 */

export function ChatStartDiscussionModal({ onClose, contacts }) {
  return (
    <div className="chat-modal">
      <h2>Select the people you want to talk to</h2>

      <ChatContactList contacts={contacts} />

      <ChatStartDiscussionButton />

      <button
        className="chat-modal-close-button"
        onClick={() => onClose(false)}
      >
        Close
      </button>
    </div>
  )
}
