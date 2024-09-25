import { Container } from '@mui/material'
import Header from '../components/Header'
import AddTodoComp from '../components/AddTodoComp'
import TodoList from '../components/TodoList'
import { useState } from 'react'

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos"

interface ITodoType {
    task:string,
    isDone:Boolean,
    id:string | number
}

const Home = () => {
    // const [todos, setTodos] = useState([] as ITodoType[])
    // const [todos, setTodos] = useState<Array<ITodoType>>([])
    const [todos, setTodos] = useState<ITodoType[]>([]) // yaygın olan kullanım
    

  return (
    <Container>
        <Header/>
        <AddTodoComp/>
        <TodoList/>
    </Container>
  )
}

export default Home