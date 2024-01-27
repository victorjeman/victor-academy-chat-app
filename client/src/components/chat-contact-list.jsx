import { clsx } from 'clsx'

import { useChatContext } from '../hooks/use-chat-context'
import { ChatContact } from './chat-contact'

export function ChatContactList() {
  const { contacts, setActiveContact, activeContact } = useChatContext()

  return (
    <div>
      <h2>My contact list</h2>

      <ul className="chat-contact-list">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="chat-contact-list-item"
          >
            <ChatContact contact={contact} />

            <button
              onClick={() => {
                setActiveContact(contact)
              }}
              className={clsx(
                'chat-contact-list-select',
                contact.id === activeContact?.id &&
                  'chat-contact-list-select--active'
              )}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
