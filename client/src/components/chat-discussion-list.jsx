import { ChatDiscussionContacts } from './chat-discussion-contacts'

export function ChatDiscussionList({
  discussions,
  loadMessages,
  highlightDiscussion,
}) {
  return (
    <div className="chat-discussion-list">
      <h3>My discussions</h3>

      <ul className="chat-discussion-list-items">
        {discussions.map((discussion) => (
          <li
            key={discussion.id}
            className="chat-discussion-list-item"
          >
            <button
              className={`chat-discussion-list-button ${
                discussion.isActive ? 'chat-discussion-list-item--active' : ''
              }`}
              onClick={() => {
                loadMessages(discussion.id)
                highlightDiscussion(discussion.id)
              }}
            >
              <ChatDiscussionContacts contacts={discussion.contacts} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
