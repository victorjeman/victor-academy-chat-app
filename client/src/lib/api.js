const API_BASE = 'http://localhost:3000'

export async function fetchDiscussions() {
  const endpoint = 'discussions'
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const discussions = await data.json()

  return discussions
}

export async function fetchContacts(endpoint) {
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const contacts = await data.json()

  return contacts
}

export async function fetchMessages(discussionId) {
  const endpoint = 'messages'
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const allMessages = await data.json()

  function checkDiscussionId(message) {
    return message.discussionId === discussionId
  }

  const discussionContent = allMessages.find(checkDiscussionId)

  return discussionContent?.messages
}

export async function postDiscussion(payload) {
  const endpoint = 'discussions'
  const data = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const newDiscussion = await data.json()

  return newDiscussion
}
