import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { useAtom } from 'jotai'
import useWebSocket from 'react-use-websocket'
import { useSWRConfig } from 'swr'

import { userAtom } from '../store/store'
import { WS_URL } from '../constants/api-constants'

export function ChatInput() {
  const [user] = useAtom(userAtom)
  const { mutate } = useSWRConfig()

  const [message, setMessage] = useState('')

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onMessage: () => {
      mutate('messages')
    },
  })

  function sendMessage() {
    const payload = {
      value: message,
      date: new Date().toISOString(),
      author: user.name,
    }

    sendJsonMessage(payload)
  }

  return (
    <div className="flex items-stretch gap-5 mt-6">
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        variant="bordered"
        className="text-lg"
      />
      <Button
        className="h-auto"
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  )
}
