function TodoForm() {
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        aria-label="Nueva tarea"
      />

      <button type="submit">
        Añadir tarea
      </button>
    </form>
  )
}

export default TodoForm