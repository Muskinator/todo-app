import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa6'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        className='fixed bottom-20 right-60 w-16 h-16'
        color='primary'
        radius='full'
        isIconOnly
        variant='shadow'
        onClick={onOpen}
      >
        <FaPlus color='white' size={25} />
      </Button>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onAddTodo={onAddTodo}
      />
    </>
  )
}

export default AddTodo
