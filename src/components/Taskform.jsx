import React from 'react'

export default function Taskform() {
  return (
    <form>
        <div>
            <input type="text" placeholder="Enter task"/>
            <button type="submit">Add Task</button>
        </div>
        <div>
          <select>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
    </form>
  )
}
