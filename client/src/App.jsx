import { NextUIProvider } from '@nextui-org/react'

import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessageList } from './components/chat-message-list'
import { ChatInput } from './components/chat-input'

import './App.css'

export default function App() {
  return (
    <NextUIProvider>
      <ChatLayout
        controls={<ChatControls />}
        aside={<ChatDiscussionList />}
        main={
          <>
            <ChatMessageList />
            <ChatInput />
          </>
        }
      />
    </NextUIProvider>
  )
}
