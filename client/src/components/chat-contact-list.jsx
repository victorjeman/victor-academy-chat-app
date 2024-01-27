import { clsx } from 'clsx'

import { ChatContact } from './chat-contact'

export function ChatContactList({ contacts, setActiveContact, activeContact }) {
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
