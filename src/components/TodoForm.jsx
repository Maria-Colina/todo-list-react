import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const cleanText = text.trim()

    if (!cleanText) {
      return
    }

    onAddTodo(cleanText)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        aria-label="Nueva tarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">
        Añadir tarea
      </button>
    </form>
  )
}

export default TodoForm