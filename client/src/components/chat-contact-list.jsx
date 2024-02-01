import { ChatContact } from './chat-contact'

export function ChatContactList({ contacts }) {
  return (
    <div>
      <h2>My contact list</h2>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ChatContact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}
