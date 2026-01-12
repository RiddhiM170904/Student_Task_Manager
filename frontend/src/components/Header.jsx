import { motion } from 'framer-motion';
import { FiPlus, FiLogOut, FiCheckSquare, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function Header({ onAddTask, user, onLogout }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>
              <motion.span
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FiCheckSquare style={{ display: 'inline', marginRight: '0.5rem' }} />
              </motion.span>
              Student Task Manager
            </h1>
            {user && (
              <motion.p
                style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: '500' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Welcome back, <span style={{ color: 'var(--primary-light)' }}>{user.name}</span>!
              </motion.p>
            )}
          </motion.div>
          <motion.div
            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="theme-toggle"
              onClick={toggleTheme}
              data-theme={theme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMoon className="theme-icon" />
              <FiSun className="theme-icon" />
              <motion.div
                className="theme-toggle-slider"
                animate={{ x: theme === 'light' ? 34 : 0 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            </motion.div>
            <motion.button
              className="btn btn-primary"
              onClick={onAddTask}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlus /> Add Task
            </motion.button>
            {user && (
              <motion.button
                className="btn btn-secondary"
                onClick={onLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLogOut /> Logout
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
