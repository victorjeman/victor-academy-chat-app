export function ChatStartDiscussionButton({ addNewDiscussion, onClose }) {
  return (
    <button
      onClick={() => {
        addNewDiscussion()
        onClose(false)
      }}
    >
      Start discussion
    </button>
  )
}
