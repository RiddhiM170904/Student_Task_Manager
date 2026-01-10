function Header({ onAddTask, user, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div>
            <h1>📝 Student Task Manager</h1>
            {user && (
              <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>
                Welcome, {user.name}!
              </p>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={onAddTask}>
              ➕ Add Task
            </button>
            {user && (
              <button className="btn btn-secondary" onClick={onLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
