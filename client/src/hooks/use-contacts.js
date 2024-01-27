import { useEffect, useState } from 'react'

import { fetchContacts } from '../lib/api'

export function useContacts() {
  const [contacts, setContacts] = useState([])

  async function loadContacts() {
    const data = await fetchContacts()
    setContacts(data)
  }

  useEffect(() => {
    loadContacts()
  }, [])

  return { contacts }
}
