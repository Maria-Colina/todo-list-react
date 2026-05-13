import TodoItem from './TodoItem'

function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  if (todos.length === 0) {
    return (
      <p className="empty-message">
        No hay tareas para mostrar.
      </p>
    )
  }

  return (
    <section className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </section>
  )
}

export default TodoList