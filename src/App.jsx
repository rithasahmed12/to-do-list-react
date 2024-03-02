import ToDoList from './ToDoList'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ToDoList />
  )
}

export default App
