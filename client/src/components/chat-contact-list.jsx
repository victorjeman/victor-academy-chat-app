import { useAtom } from 'jotai'
import { clsx } from 'clsx'
import useSWR from 'swr'

import { activeContactAtom } from '../store/store'
import { ChatContact } from './chat-contact'
import { fetchContacts } from '../lib/api'

export function ChatContactList() {
  const [activeContact, setActiveContact] = useAtom(activeContactAtom)
  const { data: contacts } = useSWR('contacts', fetchContacts)

  return (
    <div>
      <h2>My contact list</h2>

      <ul className="chat-contact-list">
        {contacts?.map((contact) => (
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
