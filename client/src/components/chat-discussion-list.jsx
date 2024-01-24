import { ChatDiscussionContacts } from './chat-discussion-contacts'

/*
 * 1. O sa primesc lista de converastii prin props.
 * 2. Voi traversa aici lista de conversatii folosind "map".
 * 3. Pentru fiecare conversatie voi afisa lista de contacte cu care am discutat
 * 4. O sa folosesc componenta ChatDiscussionContacts unde sa transmit lista de contacte
 * 5. In interiorul componentei ChatDiscussionContacts voi concatena numele de la fiecare contact ca sa iasa o lista separate prin virgula
 */

export function ChatDiscussionList() {
  return (
    <div>
      <h3>My discussions</h3>

      <div>
        <ChatDiscussionContacts />
      </div>
    </div>
  )
}
