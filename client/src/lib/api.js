const API_BASE = 'http://localhost:3000'

export async function fetchDiscussions(endpoint) {
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const discussions = await data.json()

  return discussions
}

export async function fetchContacts(endpoint) {
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const contacts = await data.json()

  return contacts
}

export async function fetchMessages(endpoint, discussionId) {
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const allMessages = await data.json()

  // TIP: Sometimes json-server send ids as string instead of number
  // That is why I use == instead of ===
  function checkDiscussionId(message) {
    return message.discussionId == discussionId
  }

  const discussionContent = allMessages.find(checkDiscussionId)

  return discussionContent?.messages
}

export async function postDiscussion(payload) {
  try {
    const endpoint = 'discussions'
    const data = await fetch(`${API_BASE}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const discussion = await data.json()
    return { discussion, error: null }
  } catch (error) {
    return { discussion: null, error }
  }
}
