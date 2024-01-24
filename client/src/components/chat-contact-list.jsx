import { ChatContact } from './chat-contact'

export function ChatContactList({ contacts }) {
  return (
    <div className="chat-contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="chat-contact-list-item"
        >
          <ChatContact contact={contact} />
        </div>
      ))}
    </div>
  )
}
