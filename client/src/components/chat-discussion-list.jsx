import { AiFillDelete } from 'react-icons/ai'
import { clsx } from 'clsx'
import { useAtom } from 'jotai'
import useSWR, { mutate } from 'swr'

import { activeDiscussionAtom } from '../store/store'
import { deleteDiscussion, fetchDiscussions } from '../lib/api'
import { ChatDiscussionContacts } from './chat-discussion-contacts'

export function ChatDiscussionList() {
  const [activeDiscussion, setActiveDiscussion] = useAtom(activeDiscussionAtom)

  const { data: discussions } = useSWR('discussions', fetchDiscussions)

  async function handleDeleteDiscussion(id) {
    const { error } = await deleteDiscussion(id)

    if (error) {
      // Poti arata o alerta daca stergerea nu a mers cum trebuie
      // Dupa dau return ca sa nu se faca mutate inutil
      return
    }

    mutate('discussions')
  }

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

            <button
              className="chat-discussion-list-delete"
              onClick={() => handleDeleteDiscussion(discussion.id)}
            >
              <AiFillDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
