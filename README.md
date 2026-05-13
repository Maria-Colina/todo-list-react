# ToDo List React

Aplicación web desarrollada con React para gestionar tareas pendientes de forma sencilla, moderna y responsive.

## Funcionalidades

- Añadir nuevas tareas.
- Evitar tareas vacías.
- Mostrar listado dinámico de tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Editar tareas existentes.
- Filtrar tareas:
  - Todas
  - Pendientes
  - Completadas
- Contador de tareas pendientes.
- Contador de tareas completadas.
- Eliminación masiva de tareas completadas.
- Persistencia de datos mediante localStorage.
- Diseño responsive adaptable a dispositivos móviles.

## Componentes utilizados

La aplicación está dividida en componentes reutilizables:

- App
- TodoForm
- TodoList
- TodoItem

## Tecnologías utilizadas

- React
- JavaScript
- CSS
- Vite
- localStorage

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Explicación del funcionamiento

El usuario puede crear tareas desde un formulario. Cada tarea se almacena en el estado de la aplicación y se renderiza dinámicamente en pantalla.

Las tareas pueden marcarse como completadas, editarse o eliminarse. Además, la aplicación incorpora filtros para visualizar distintos tipos de tareas y utiliza localStorage para conservar la información incluso al recargar la página.

## Repositorio GitHub

Repositorio del proyecto:

https://github.com/Maria-Colina/todo-list-react