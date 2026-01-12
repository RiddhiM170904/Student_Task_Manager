import { motion, AnimatePresence } from 'framer-motion';
import { FiInbox } from 'react-icons/fi';
import TaskCard from './TaskCard';

function TaskList({ tasks, onToggleComplete, onEdit, onDelete, searchQuery }) {
  if (tasks.length === 0) {
    return (
      <motion.div
        className="empty-state"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="empty-state-icon"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FiInbox size={80} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          No tasks found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {searchQuery 
            ? `No tasks match "${searchQuery}". Try a different search term.`
            : 'Get started by adding your first task!'
          }
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="tasks-container">
      <motion.div
        className="tasks-header"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>Tasks</h2>
        <motion.span
          className="tasks-count"
          key={tasks.length}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {searchQuery && `${tasks.length} result${tasks.length !== 1 ? 's' : ''} for "${searchQuery}"`}
          {!searchQuery && `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`}
        </motion.span>
      </motion.div>
      <motion.div className="tasks-list" layout>
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onToggleComplete={onToggleComplete}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default TaskList;
