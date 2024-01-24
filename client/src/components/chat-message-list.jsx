import { ChatMessage } from './chat-message'

/*
 * 1. Voi primi lista de message in props.
 * 2. Voi traversa lista de message folosind "map".
 * 3. Voi afisa fiecare message folosind componenta ChatMessage.
 */

export function ChatMessageList() {
  return (
    <div>
      <ChatMessage />
    </div>
  )
}
