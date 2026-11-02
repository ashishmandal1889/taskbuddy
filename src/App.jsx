import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import { Sparkles, Trash2 } from 'lucide-react';
import './Style.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('taskbuddy_tasks') || localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('taskbuddy_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const updateTask = (updatedTask, index) => {
    setTasks((prev) => {
      const next = [...prev];
      next[index] = updatedTask;
      return next;
    });
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    if (tasks.length === 0) return;
    const confirmed = window.confirm('Are you sure you want to delete all tasks?');
    if (confirmed) {
      setTasks([]);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-badge">
          <Sparkles size={14} /> Productivity Suite
        </div>
        <h1 className="title">
          Task<span>Buddy</span>
        </h1>
        <p className="tagline">Your friendly, modern task manager</p>
      </header>

      <main>
        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />

        <ProgressTracker tasks={tasks} />

        {tasks.length > 0 && (
          <div className="app-footer">
            <button type="button" className="clear-btn" onClick={clearTasks}>
              <Trash2 size={16} />
              Clear All Tasks
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
