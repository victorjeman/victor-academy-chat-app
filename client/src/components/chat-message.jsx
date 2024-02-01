export function ChatMessage({ message }) {
  return (
    <div>
      <p>{message.value}</p>
      <p>{message.author}</p>
      <p>{message.date}</p>
    </div>
  )
}
