import TaskCard from './TaskCard';

function TaskList({ tasks, onToggleComplete, onEdit, onDelete, searchQuery }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📋</div>
        <h2>No tasks found</h2>
        <p>
          {searchQuery 
            ? `No tasks match "${searchQuery}". Try a different search term.`
            : 'Get started by adding your first task!'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>Tasks</h2>
        <span className="tasks-count">
          {searchQuery && `${tasks.length} result${tasks.length !== 1 ? 's' : ''} for "${searchQuery}"`}
          {!searchQuery && `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`}
        </span>
      </div>
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
