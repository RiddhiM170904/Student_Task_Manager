import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';

function Dashboard({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const overdueTasks = tasks.filter(task => {
    return !task.completed && new Date(task.dueDate) < new Date();
  }).length;
  
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: FiTrendingUp,
      color: 'primary',
      bgGradient: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-purple) 100%)'
    },
    {
      label: 'Completed',
      value: completedTasks,
      icon: FiCheckCircle,
      color: 'success',
      bgGradient: 'linear-gradient(135deg, var(--success-color) 0%, var(--success-light) 100%)'
    },
    {
      label: 'Pending',
      value: pendingTasks,
      icon: FiClock,
      color: 'warning',
      bgGradient: 'linear-gradient(135deg, var(--warning-color) 0%, var(--warning-light) 100%)'
    },
    {
      label: 'Overdue',
      value: overdueTasks,
      icon: FiAlertCircle,
      color: 'danger',
      bgGradient: 'linear-gradient(135deg, var(--danger-color) 0%, var(--danger-light) 100%)'
    }
  ];

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`stat-card stat-${stat.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="stat-icon" style={{ background: stat.bgGradient }}>
              <stat.icon size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {totalTasks > 0 && (
        <motion.div
          className="progress-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="progress-header">
            <h3>Overall Progress</h3>
            <span className="progress-percentage">{completionRate}%</span>
          </div>
          <div className="progress-bar-container">
            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${completionRate}%` }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="progress-info">
            <span>{completedTasks} of {totalTasks} tasks completed</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Dashboard;
