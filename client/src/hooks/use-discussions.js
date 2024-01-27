import { useEffect, useState } from 'react'

import { fetchDiscussions, postDiscussion } from '../lib/api'

export function useDiscussions({ user, activeContact }) {
  const [discussions, setDiscussions] = useState([])

  async function loadDiscussions() {
    const data = await fetchDiscussions()
    setDiscussions(data)
  }

  async function addNewDiscussion() {
    const payload = {
      contacts: [
        { id: user.id, name: user.name },
        { id: activeContact.id, name: activeContact.name },
      ],
    }

    const newDiscussion = await postDiscussion(payload)

    const updatedDiscussions = [...discussions, newDiscussion]

    setDiscussions(updatedDiscussions)
  }

  function highlightDiscussion(discussionId) {
    function checkDiscussionId(discussion) {
      return discussion.id === discussionId
    }

    const activeDiscussion = discussions.find(checkDiscussionId)

    function updateDiscussion(discussion) {
      return {
        ...discussion,
        isActive: discussion.id === activeDiscussion.id,
      }
    }

    const updatedDiscussions = discussions.map(updateDiscussion)

    setDiscussions(updatedDiscussions)
  }

  useEffect(() => {
    loadDiscussions()
  }, [])

  return { discussions, setDiscussions, addNewDiscussion, highlightDiscussion }
}
