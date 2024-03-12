import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'

function AddTodoModal ({ isOpen, onOpenChange, onOpen, onAddTodo }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='4x1'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1 items-center'>créer une nouvelle tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={onAddTodo} />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                annuler
              </Button>
              <Button color='primary' onPress={onClose}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default AddTodoModal
