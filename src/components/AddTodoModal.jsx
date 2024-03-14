import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'
import { useTodos } from '../hooks/todosHooks'

function AddTodoModal ({ todoToEdit, isOpen, onOpenChange, onOpen }) {
  const { addTodo, updateTodo } = useTodos()
  const handleSubmit = (formData, id = null) => {
    if (id) {
      // c'est une modification
      updateTodo({
        ...formData,
        _id: id
      })
    } else {
      // ceci est un ajout
      addTodo(formData)
    }
  }

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
            <ModalHeader className='flex flex-col gap-1 items-center'>{todoToEdit ? 'Modifier' : 'Ajouter'} une tâche</ModalHeader>
            <ModalBody>
              <TodoForm
                onSubmit={handleSubmit}
                todoToEdit={todoToEdit}
                onClose={onClose}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default AddTodoModal
