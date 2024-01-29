import { useAtom } from 'jotai'
import useSWR from 'swr'
import {
  Avatar,
  RadioGroup,
  VisuallyHidden,
  cn,
  useRadio,
} from '@nextui-org/react'

import { activeContactAtom } from '../store/store'
import { fetchContacts } from '../lib/api'
import { ChatContact } from './chat-contact'

const CustomRadio = (props) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props)

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
        'cursor-pointer border-2 border-default rounded-lg gap-4 p-4',
        'data-[selected=true]:border-primary'
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>

      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  )
}

export function ChatContactList() {
  const [activeContact, setActiveContact] = useAtom(activeContactAtom)
  const { data: contacts } = useSWR('contacts', fetchContacts)

  return (
    <RadioGroup value={activeContact?.name || ''}>
      {contacts?.map((contact) => (
        <CustomRadio
          key={contact.id}
          value={contact.name}
          onChange={() => setActiveContact(contact)}
        >
          <div className="flex items-center gap-4">
            <Avatar
              color="default"
              src={contact.imageUrl}
            />
            <ChatContact contact={contact} />
          </div>
        </CustomRadio>
      ))}
    </RadioGroup>
  )
}
