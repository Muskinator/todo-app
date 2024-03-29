import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import Auth from './pages/Auth'
import CustomNavbar from './components/CustomNavbar'
import ProtectedRoutes from './components/ProtectedRoutes'

function App () {
  return (
    <>
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route path='/Auth' element={<Auth />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
