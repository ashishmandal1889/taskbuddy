import { useState } from 'react';
import { Check, Edit2, Trash2, X, ClipboardList } from 'lucide-react';

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editPriority, setEditPriority] = useState('Medium');
  const [editCategory, setEditCategory] = useState('General');
  const [filter, setFilter] = useState('all');

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
    setEditPriority(tasks[index].priority || 'Medium');
    setEditCategory(tasks[index].category || 'General');
  };

  const cancelEditing = () => {
    setEditingIndex(null);
  };

  const saveEdit = (index) => {
    const trimmed = editText.trim();
    if (!trimmed) return;

    updateTask(
      {
        ...tasks[index],
        text: trimmed,
        priority: editPriority,
        category: editCategory
      },
      index
    );
    setEditingIndex(null);
  };

  // Filter tasks
  const filteredTasksWithIndex = tasks
    .map((task, index) => ({ task, index }))
    .filter(({ task }) => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div>
      {/* Filter tabs if tasks exist */}
      {tasks.length > 0 && (
        <div className="filter-tabs">
          <div className="tab-group">
            <button
              type="button"
              className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button
              type="button"
              className={`tab-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active ({tasks.length - completedCount})
            </button>
            <button
              type="button"
              className={`tab-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Done ({completedCount})
            </button>
          </div>
          <span className="task-count-pill">
            Showing {filteredTasksWithIndex.length} of {tasks.length}
          </span>
        </div>
      )}

      {/* Empty State */}
      {tasks.length === 0 ? (
        <div className="empty-state">
          <ClipboardList className="empty-icon" />
          <h3 className="empty-title">No tasks yet</h3>
          <p className="empty-desc">
            Type your task above and click &quot;Add Task&quot; to get organized!
          </p>
        </div>
      ) : filteredTasksWithIndex.length === 0 ? (
        <div className="empty-state">
          <h3 className="empty-title">No {filter} tasks</h3>
          <p className="empty-desc">Switch tabs or add more tasks to see them here.</p>
        </div>
      ) : (
        <ul className="task-list">
          {filteredTasksWithIndex.map(({ task, index }) => {
            const isEditing = editingIndex === index;
            const priorityClass = `priority-${(task.priority || 'medium').toLowerCase()}`;

            return (
              <li
                key={task.id || index}
                className={`task-item ${task.completed ? 'completed' : ''} ${priorityClass}`}
              >
                {isEditing ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveEdit(index);
                    }}
                    className="edit-form"
                  >
                    <input
                      type="text"
                      className="edit-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      autoFocus
                    />
                    <div className="edit-controls">
                      <div className="edit-selects">
                        <select
                          value={editPriority}
                          onChange={(e) => setEditPriority(e.target.value)}
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>

                        <select
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value)}
                        >
                          <option value="General">General</option>
                          <option value="Work">Work</option>
                          <option value="Personal">Personal</option>
                          <option value="Study">Study</option>
                          <option value="Health">Health</option>
                        </select>
                      </div>

                      <div className="edit-btn-group">
                        <button type="submit" className="btn-save">
                          <Check size={14} /> Save
                        </button>
                        <button
                          type="button"
                          className="btn-cancel"
                          onClick={cancelEditing}
                        >
                          <X size={14} /> Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="task-left">
                      <button
                        type="button"
                        className="check-btn"
                        onClick={() => toggleComplete(index)}
                        title={task.completed ? 'Mark as active' : 'Mark as complete'}
                        aria-label={task.completed ? 'Mark as active' : 'Mark as complete'}
                      >
                        <Check size={15} strokeWidth={3} />
                      </button>

                      <div className="task-content">
                        <span className="task-text">{task.text}</span>
                        <div className="task-meta">
                          <span
                            className={`badge badge-priority-${(
                              task.priority || 'medium'
                            ).toLowerCase()}`}
                          >
                            {task.priority || 'Medium'}
                          </span>
                          <span className="badge badge-category">
                            {task.category || 'General'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="task-actions">
                      <button
                        type="button"
                        className="action-btn btn-edit"
                        onClick={() => startEditing(index)}
                        title="Edit Task"
                        aria-label="Edit Task"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        type="button"
                        className="action-btn btn-delete"
                        onClick={() => deleteTask(index)}
                        title="Delete Task"
                        aria-label="Delete Task"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
