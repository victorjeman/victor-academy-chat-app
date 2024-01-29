import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Switch,
} from '@nextui-org/react'

import { ChatContactList } from './chat-contact-list'
import { ChatStartDiscussionButton } from './chat-start-discussion-button'

export function ChatToggleContacts() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Switch
        defaultSelected
        onValueChange={onOpen}
        isSelected={isOpen}
      >
        Toggle contact list
      </Switch>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                My contacts
              </ModalHeader>

              <ModalBody>
                <ChatContactList />
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>

                <ChatStartDiscussionButton onCloseModal={onClose} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
