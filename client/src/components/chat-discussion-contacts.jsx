export function ChatDiscussionContacts({ contacts }) {
  return (
    <div>
      {contacts.map((contact, index) => {
        return index === contacts.length - 1
          ? contact.name
          : `${contact.name}, `
      })}
    </div>
  )
}
