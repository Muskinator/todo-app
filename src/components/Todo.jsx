import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { FaDeleteLeft, FaPencil } from 'react-icons/fa6'
import { useTodos } from '../hooks/todosHooks'

function Todo ({ openEditModal, todo }) {
  const { title, description, _id } = todo
  const { deleteTodo } = useTodos()
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />

        <div className='flex flex-col flex-grow'>
          <p className='text-md'>{title}</p>
          <p className='text-small text-default-500'>{description}</p>
        </div>
        <div className='flex flex-col'>
          <Button
            onPress={() => deleteTodo(_id)}
            variant='light'
            isIconOnly
          >
            <FaDeleteLeft
              color='red'
            />
          </Button>
          <Button
            onPress={() => openEditModal(todo)}
            variant='light'
            isIconOnly
          >
            <FaPencil />
          </Button>

        </div>
      </CardHeader>

    </Card>
  )
}

export default Todo
