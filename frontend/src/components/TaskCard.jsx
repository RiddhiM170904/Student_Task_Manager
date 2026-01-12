import { motion } from 'framer-motion';
import { FiEdit2, FiTrash2, FiCalendar, FiClock, FiAlertCircle } from 'react-icons/fi';

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
    <motion.div
      className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="task-header">
        <motion.input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task)}
          whileTap={{ scale: 0.9 }}
        />
        <div className="task-content">
          <motion.h3
            className={`task-title ${task.completed ? 'completed' : ''}`}
            layout
          >
            {task.title}
          </motion.h3>
          {task.description && (
            <motion.p className="task-description" layout>
              {task.description}
            </motion.p>
          )}
          <div className="task-meta">
            <motion.div
              className="task-meta-item"
              whileHover={{ scale: 1.05 }}
            >
              {isOverdue() ? (
                <FiAlertCircle style={{ color: 'var(--danger-color)' }} />
              ) : (
                <FiCalendar />
              )}
              <span style={{ color: isOverdue() ? 'var(--danger-color)' : 'inherit' }}>
                {formatDate(task.dueDate)}
                {isOverdue() && ' (Overdue)'}
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`priority-badge priority-${task.priority}`}>
                {task.priority}
              </span>
            </motion.div>
          </div>
          <div className="task-actions">
            <motion.button
              className="icon-btn"
              onClick={() => onEdit(task)}
              title="Edit task"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiEdit2 />
            </motion.button>
            <motion.button
              className="icon-btn danger"
              onClick={() => onDelete(task._id)}
              title="Delete task"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTrash2 />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskCard;
