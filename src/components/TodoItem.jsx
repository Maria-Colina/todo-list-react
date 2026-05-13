import { useState } from 'react'

function TodoItem({
  todo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  function handleEditSubmit(event) {
    event.preventDefault()

    const cleanText = editedText.trim()

    if (!cleanText) {
      return
    }

    onEditTodo(todo.id, cleanText)
    setIsEditing(false)
  }

  return (
    <article className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-check">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span></span>
      </label>

      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedText}
            onChange={(event) => setEditedText(event.target.value)}
            autoFocus
          />

          <button type="submit">Guardar</button>
        </form>
      ) : (
        <span className="todo-text">
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        <button
          type="button"
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default TodoItem