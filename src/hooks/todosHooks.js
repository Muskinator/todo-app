import { useCallback, useEffect, useState } from 'react'
import { apiGetTodos, apiAddTodo, apiDeleteTodo, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'
function useTodos () {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      console.log(todosData)
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiAddTodo(todo)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const deleteTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiDeleteTodo(todo)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const updateTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiUpdateTodo(todo)
      setTodos(todosData)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return {
    todos, loading, error, getData, updateTodo, deleteTodo, addTodo
  }
}
const useTodosSharable = () => useBetween(useTodos)
export { useTodosSharable as useTodos }
