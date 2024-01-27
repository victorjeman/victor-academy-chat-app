import { ChatDiscussionContacts } from './chat-discussion-contacts'

export function ChatDiscussionList({ discussions }) {
  return (
    <div className="chat-discussion-list">
      <h3>My discussions</h3>

      <ul className="chat-discussion-list-items">
        {discussions.map((discussion) => (
          <li
            key={discussion.id}
            className="chat-discussion-list-item"
          >
            <button className="chat-discussion-list-button">
              <ChatDiscussionContacts contacts={discussion.contacts} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
