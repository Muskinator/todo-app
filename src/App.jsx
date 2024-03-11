import { Button } from '@nextui-org/react'
import './App.css'
import Clock from './components/Clock'

function App () {
  return (
    <>
      <Clock interval={1000} />
      <Button className='bg-primary-200'>C'est MON bouton</Button>
    </>
  )
}
export default App
