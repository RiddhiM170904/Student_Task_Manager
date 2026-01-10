function TaskCard({ task, onToggleComplete, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isOverdue = () => {
    return !task.completed && new Date(task.dueDate) < new Date();
  };

  return (
    <div className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task)}
        />
        <div className="task-content">
          <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          <div className="task-meta">
            <div className="task-meta-item">
              <span>📅</span>
              <span style={{ color: isOverdue() ? 'var(--danger-color)' : 'inherit' }}>
                {formatDate(task.dueDate)}
                {isOverdue() && ' (Overdue)'}
              </span>
            </div>
            <div className="task-meta-item">
              <span className={`priority-badge priority-${task.priority}`}>
                {task.priority.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="task-actions">
            <button
              className="icon-btn"
              onClick={() => onEdit(task)}
              title="Edit task"
            >
              ✏️
            </button>
            <button
              className="icon-btn danger"
              onClick={() => onDelete(task._id)}
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
