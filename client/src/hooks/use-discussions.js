import { useEffect, useState } from 'react'

import { fetchDiscussions } from '../lib/api'

export function useDiscussions({ user, activeContact }) {
  const [discussions, setDiscussions] = useState([])

  async function loadDiscussions() {
    const data = await fetchDiscussions()
    setDiscussions(data)
  }

  function addNewDiscussion() {
    const newDiscussionId = discussions.length + 1

    const newDiscussion = {
      id: newDiscussionId,
      contacts: [
        { id: user.id, name: user.name },
        { id: activeContact.name, name: activeContact.name },
      ],
    }

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
