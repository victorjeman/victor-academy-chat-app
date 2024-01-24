import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

export default function App() {
  return (
    <div>
      <ChatStartDiscussionModal />
      <ChatControls />
      <ChatDiscussionList />
      <ChatMessageList />
    </div>
  )
}
