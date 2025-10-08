'use client'

import { useState } from 'react'

export default function Main() {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = (task: string) => {
    setTasks([...tasks, task])
  }

  return (
    <main className="flex-1 p-4">
      <h2 className="text-xl mb-4">Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">{task}</li>
        ))}
      </ul>
      <button onClick={() => addTask('New Task')} className="bg-secondary text-secondary-foreground p-2 mt-4">
        Add Task
      </button>
    </main>
  )
}
