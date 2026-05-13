import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <main className="app">
      <section className="todo-card">
        <header className="app-header">
          <p className="eyebrow">React · ToDo List</p>
          <h1>Gestor de tareas</h1>
          <p className="subtitle">
            Organiza, completa y controla tus tareas desde una interfaz clara y responsive.
          </p>
        </header>

        <TodoForm />

        <TodoList todos={todos} />
      </section>
    </main>
  )
}

export default App