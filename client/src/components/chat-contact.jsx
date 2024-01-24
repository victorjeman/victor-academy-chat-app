/*
 * 1. O sa primesc un contact prin props.
 * 2. Fiecare contact va avea un nume si un id.
 * 3. Voi extrage numele din contact si-l voi afisa.
 */

export function ChatContact({ contact }) {
  return (
    <div>
      <p>{contact.name}</p>
    </div>
  )
}
