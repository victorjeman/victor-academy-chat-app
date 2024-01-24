import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

import './App.css'

export default function App() {
  return (
    <>
      {false && <ChatStartDiscussionModal />}

      <ChatLayout
        controls={<ChatControls />}
        aside={<ChatDiscussionList />}
        main={<ChatMessageList />}
      />
    </>
  )
}
