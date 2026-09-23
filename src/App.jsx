import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Погулять с собакой', done: true },
    { id: 2, title: 'Купить продукты', done: false },
    { id: 3, title: 'Убраться в комнате', done: false },
  ])
  const [title, setTitle] = useState('')

  function addTask(event) {
    event.preventDefault()

    if (!title.trim()) return

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      done: false,
    }

    setTasks([...tasks, newTask])
    setTitle('')
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main>
      <h1>Todo-лист</h1>

      <form onSubmit={addTask}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Новая задача"
        />
        <button type="submit">Добавить</button>
      </form>

      {tasks.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.done ? 'done' : ''}>{task.title}</span>
              </label>
              <button type="button" onClick={() => deleteTask(task.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
