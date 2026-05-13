import { useEffect, useMemo, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const STORAGE_KEY = 'todo-list-react-tasks'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY)
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const pendingCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  const filteredTodos = useMemo(() => {
    if (filter === 'pending') {
      return todos.filter((todo) => !todo.completed)
    }

    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed)
    }

    return todos
  }, [todos, filter])

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTodos([newTodo, ...todos])
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function editTodo(id, newText) {
    const cleanText = newText.trim()

    if (!cleanText) {
      return
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: cleanText }
          : todo
      )
    )
  }

  function clearCompletedTodos() {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <main className="app">
      <section className="todo-card">
        <header className="app-header">
          <p className="eyebrow">React · ToDo List</p>
          <h1>Gestor de tareas</h1>
          <p className="subtitle">
            Organiza tus tareas, marca avances, filtra resultados y conserva la información aunque recargues la página.
          </p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <section className="stats-panel" aria-label="Resumen de tareas">
          <div>
            <span>{pendingCount}</span>
            <p>Pendientes</p>
          </div>

          <div>
            <span>{completedCount}</span>
            <p>Completadas</p>
          </div>

          <div>
            <span>{todos.length}</span>
            <p>Totales</p>
          </div>
        </section>

        <section className="toolbar" aria-label="Filtros de tareas">
          <div className="filters">
            <button
              type="button"
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              Todas
            </button>

            <button
              type="button"
              className={filter === 'pending' ? 'active' : ''}
              onClick={() => setFilter('pending')}
            >
              Pendientes
            </button>

            <button
              type="button"
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completadas
            </button>
          </div>

          <button
            type="button"
            className="clear-button"
            onClick={clearCompletedTodos}
            disabled={completedCount === 0}
          >
            Borrar completadas
          </button>
        </section>

        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      </section>
    </main>
  )
}

export default App