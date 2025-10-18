import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [searchQuery, setSearchQuery] = useState('');

  // Load tasks and theme from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTasks, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTasks;
    setTasks(newTask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTask = () => {
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      setTasks([]);
      localStorage.removeItem('tasks');
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // Filter tasks based on status
  const getFilteredTasks = () => {
    let filtered = tasks;
    
    // Apply status filter
    if (filter === 'active') {
      filtered = filtered.filter(task => !task.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(task =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }

  const filteredTasks = getFilteredTasks();

  // Task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const highPriorityTasks = tasks.filter(t => t.priority === 'high' && !t.completed).length;

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      {/* Header with Dark Mode Toggle */}
      <div className="app-header">
        <div>
          <h1>Task Remainder</h1>
          <p>Stay organized, stay productive</p>
        </div>
        <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle Dark Mode">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Statistics Dashboard */}
      <div className="stats-dashboard">
        <div className="stat-card">
          <span className="stat-value">{totalTasks}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{activeTasks}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{completedTasks}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card priority-card">
          <span className="stat-value">{highPriorityTasks}</span>
          <span className="stat-label">High Priority</span>
        </div>
      </div>

      {/* Task Form */}
      <Taskform addTask={addTask} />

      {/* Search and Filter Controls */}
      <div className="controls-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({totalTasks})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active ({activeTasks})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedTasks})
          </button>
        </div>
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          allTasks={tasks}
          updateTask={updateTask}
          deleteTask={(index) => {
            const originalIndex = tasks.indexOf(filteredTasks[index]);
            deleteTask(originalIndex);
          }}
        />
      ) : (
        <div className="empty-state">
          <span className="empty-icon">📝</span>
          <h3>No tasks found</h3>
          <p>
            {searchQuery ? 'Try a different search term' : filter === 'completed' ? 'No completed tasks yet' : 'Add a task to get started!'}
          </p>
        </div>
      )}

      {/* Progress Tracker */}
      <Progresstracker tasks={tasks} />

      {/* Clear All Button */}
      {tasks.length > 0 && (
        <button className="clear-all-btn" onClick={clearTask}>
          🗑️ Clear All Tasks
        </button>
      )}
    </div>
  )
}
