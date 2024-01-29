import { Button } from '@nextui-org/react'
import { useSWRConfig } from 'swr'
import { useAtom } from 'jotai'

import { activeContactAtom, userAtom } from '../store/store'
import { postDiscussion } from '../lib/api'

export function ChatStartDiscussionButton({ onCloseModal }) {
  const [activeContact] = useAtom(activeContactAtom)
  const [user] = useAtom(userAtom)

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
    onCloseModal()
  }

  return (
    <Button
      color="primary"
      onPress={startDiscussion}
    >
      Start discussion
    </Button>
  )
}
