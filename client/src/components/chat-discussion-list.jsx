import { ChatDiscussionContacts } from './chat-discussion-contacts'

export function ChatDiscussionList({ discussions }) {
  return (
    <div className="chat-discussion-list">
      <h3 className="chat-discussion-list-title">My discussions</h3>

      <div className="chat-discussion-list-container">
        {discussions.map((discussion) => (
          <div key={discussion.id}>
            <ChatDiscussionContacts contacts={discussion.contacts} />
          </div>
        ))}
      </div>
    </div>
  )
}
