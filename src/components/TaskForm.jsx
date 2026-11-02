import { useState } from 'react';
import { Plus, ChevronDown } from 'lucide-react';

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    addTask({
      id: Date.now().toString(),
      text: trimmed,
      priority,
      category,
      completed: false,
      createdAt: new Date().toISOString()
    });

    // Reset input states
    setTask('');
    setPriority('Medium');
    setCategory('General');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done? Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          autoFocus
        />
        <button type="submit" className="add-btn">
          <Plus size={18} strokeWidth={2.5} />
          Add Task
        </button>
      </div>

      <div className="dropdown-group">
        <div className="select-wrapper">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            aria-label="Task Priority"
          >
            <option value="High">🔴 High Priority</option>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="Low">🟢 Low Priority</option>
          </select>
          <ChevronDown size={16} className="select-chevron" />
        </div>

        <div className="select-wrapper">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Task Category"
          >
            <option value="General">📁 General</option>
            <option value="Work">💼 Work</option>
            <option value="Personal">👤 Personal</option>
            <option value="Study">📚 Study</option>
            <option value="Health">💪 Health</option>
          </select>
          <ChevronDown size={16} className="select-chevron" />
        </div>
      </div>
    </form>
  );
}
