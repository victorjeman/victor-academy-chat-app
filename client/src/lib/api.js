const API_BASE = 'http://localhost:3000'

export async function fetchDiscussions() {
  const endpoint = 'discussions'
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const discussions = await data.json()

  return discussions
}

export async function fetchContacts() {
  const endpoint = 'contacts'
  const data = await fetch(`${API_BASE}/${endpoint}`)
  const contacts = await data.json()

  return contacts
}
