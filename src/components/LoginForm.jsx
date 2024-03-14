import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function LoginForm () {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  const { login } = useAuth()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    login(formData)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-full gap-4'
    >
      <Input
        name='email'
        type='email'
        label='Email'
        variant='flat'
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        variant='flat'
        value={formData.password}
        onChange={handleChange}
      />
      <Button type='submit'>
        Se connecter
      </Button>

    </form>
  )
}

export default LoginForm
