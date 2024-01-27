import { useChatContext } from '../hooks/use-chat-context'

export function ChatStartDiscussionButton() {
  const { addNewDiscussion, setIsModalVisible } = useChatContext()
  return (
    <button
      onClick={() => {
        addNewDiscussion()
        setIsModalVisible(false)
      }}
    >
      Start discussion
    </button>
  )
}
