export function ChatDiscussionContacts({ contacts }) {
  return (
    <div className="chat-discussion-contacts">
      {contacts.map((contact, index) => (
        <span key={index}>{contact.name}, </span>
      ))}
    </div>
  )
}
