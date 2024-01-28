import { clsx } from 'clsx'
import useSWR from 'swr'

import { fetchDiscussions } from '../lib/api'
import { useChatContext } from '../hooks/use-chat-context'
import { ChatDiscussionContacts } from './chat-discussion-contacts'

export function ChatDiscussionList() {
  const { activeDiscussion, setActiveDiscussion } = useChatContext()

  const { data: discussions } = useSWR('discussions', fetchDiscussions)

  return (
    <div className="chat-discussion-list">
      <h3>My discussions</h3>

      <ul className="chat-discussion-list-items">
        {discussions?.map((discussion) => (
          <li
            key={discussion.id}
            className="chat-discussion-list-item"
          >
            <button
              className={clsx(
                'chat-discussion-list-button',
                discussion.id === activeDiscussion?.id &&
                  'chat-discussion-list-item--active'
              )}
              onClick={() => {
                setActiveDiscussion(discussion)
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
