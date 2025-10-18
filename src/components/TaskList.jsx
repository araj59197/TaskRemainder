import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
  const toggleComplete = (index) => {
    const updatedTasks = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTasks, index);
  }
  return (
    <ul>
      {tasks.map((task, index) => (
        <li 
          key={index} 
          className={task.completed ? 'completed' : ''} 
          data-priority={task.priority}
        >
          <div>
            <span>{task.text}</span>
            <small> ( {task.priority}  ,  {task.category} )</small>
          </div>

          <div>
            <button 
              className="complete-btn"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "↩ Undo" : "✓ Complete"}
            </button>
            
            <button 
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              🗑 Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
