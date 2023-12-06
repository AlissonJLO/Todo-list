import { useState } from 'react'
import Todo from './components/todo'
import './App.css'
import TodoForms from './components/TodoForms'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: (Math.random() * 1000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodo)
  }

  const removetodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completTodos = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodo)
  } 

  return (
    <div className="App">
      <TodoForms addTodo={addTodo} />
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removetodo={removetodo} completTodos={completTodos} />
        ))}
      </div>


    </div>
  )
}

export default App
