import { useSWRConfig } from 'swr'

import { useChatContext } from '../hooks/use-chat-context'
import { postDiscussion } from '../lib/api'

export function ChatStartDiscussionButton() {
  const { setIsModalVisible, activeContact, user } = useChatContext()
  const { mutate } = useSWRConfig()

  async function startDiscussion() {
    const payload = {
      contacts: [
        { id: activeContact.id, name: activeContact.name },
        { id: user.id, name: user.name },
      ],
    }

    const { error } = await postDiscussion(payload)

    // Show an alert that the post didn't work
    if (error) return

    mutate('discussions')
    setIsModalVisible(false)
  }

  return <button onClick={startDiscussion}>Start discussion</button>
}
