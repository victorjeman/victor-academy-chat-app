import { ChatContact } from './chat-contact'

/*
 * 1. O sa primesc lista de contacte prin props. O sa fie un array "contacts".
 * 2. O sa traversez lista de contacte folosind "map". contacts.map(() => {})
 * 3. O o sa afisez fiecare contact folosind componenta ChatContact
 */

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
