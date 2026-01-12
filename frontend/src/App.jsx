import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskModal from './components/EditTaskModal';
import FilterBar from './components/FilterBar';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import ConfirmModal from './components/ConfirmModal';
import { getTasks, createTask, updateTask, deleteTask, login, signup } from './api/api';
import { useToast } from './context/ToastContext';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all'); // all, pending, completed
  const [sortBy, setSortBy] = useState('createdAt'); // createdAt, dueDate, priority
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const toast = useToast();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      fetchTasks();
    } else {
      setAuthLoading(false);
      setLoading(false);
    }
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data.data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      if (error.response?.status === 401) {
        // Token expired or invalid
        handleLogout();
      } else {
        toast.error('Failed to fetch tasks. Please try again.');
      }
    } finally {
      setLoading(false);
      setAuthLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const data = await login({ email, password });
      
      if (data.success && data.data) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify({
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
        }));
        
        setUser({
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
        });
        
        await fetchTasks();
      }
    } catch (error) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (name, email, password) => {
    try {
      const data = await signup({ name, email, password });
      
      if (data.success && data.data) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify({
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
        }));
        
        setUser({
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
        });
        
        setTasks([]);
        setLoading(false);
      }
    } catch (error) {
      console.error('Signup error:', error);
      throw new Error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setTasks([]);
  };

  const handleAddTask = async (taskData) => {
    try {
      const data = await createTask(taskData);
      setTasks([data.data, ...tasks]);
      setShowAddForm(false);
      toast.success('Task created successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
      if (error.response?.status === 401) {
        handleLogout();
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to create task. Please try again.');
      }
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const data = await updateTask(id, taskData);
      setTasks(tasks.map(task => task._id === id ? data.data : task));
      setEditingTask(null);
      toast.success('Task updated successfully!');
    } catch (error) {
      console.error('Error updating task:', error);
      if (error.response?.status === 401) {
        handleLogout();
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to update task. Please try again.');
      }
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const data = await updateTask(task._id, { ...task, completed: !task.completed });
      setTasks(tasks.map(t => t._id === task._id ? data.data : t));
      toast.success(data.data.completed ? 'Task marked as completed! 🎉' : 'Task marked as pending');
    } catch (error) {
      console.error('Error toggling task:', error);
      if (error.response?.status === 401) {
        handleLogout();
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to update task. Please try again.');
      }
    }
  };

  const handleDeleteTask = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = async () => {
    try {
      await deleteTask(deleteConfirm);
      setTasks(tasks.filter(task => task._id !== deleteConfirm));
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      if (error.response?.status === 401) {
        handleLogout();
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to delete task. Please try again.');
      }
    }
  };

  const getFilteredTasks = () => {
    let filtered = [...tasks];

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        (task.description && task.description.toLowerCase().includes(query))
      );
    }

    // Apply filter
    if (filter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    }

    // Apply sort
    filtered.sort((a, b) => {
      if (sortBy === 'dueDate') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else if (sortBy === 'priority') {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    return filtered;
  };

  if (authLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm onLogin={handleLogin} onSignup={handleSignup} />;
  }

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app">
      <Header 
        onAddTask={() => setShowAddForm(true)} 
        user={user}
        onLogout={handleLogout}
      />
      
      <div className="container">
        <Dashboard tasks={tasks} />
        
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onEdit={setEditingTask}
            onDelete={handleDeleteTask}
            searchQuery={searchQuery}
          />
        )}
      </div>

      {showAddForm && (
        <AddTaskForm
          onSubmit={handleAddTask}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSubmit={handleUpdateTask}
          onClose={() => setEditingTask(null)}
        />
      )}

      <ConfirmModal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={confirmDelete}
        title="Delete Task?"
        message="Are you sure you want to delete this task? This action cannot be undone."
      />
    </div>
  );
}

export default App;
