import { motion } from 'framer-motion';
import { FiSearch, FiX, FiFilter, FiArrowDown } from 'react-icons/fi';

function FilterBar({ filter, setFilter, sortBy, setSortBy, searchQuery, setSearchQuery }) {
  return (
    <motion.div
      className="filter-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="filter-controls">
        <div className="filter-group search-group">
          <label htmlFor="search"><FiSearch /> Search:</label>
          <motion.input
            type="text"
            id="search"
            className="form-input search-input"
            placeholder="Search tasks by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
          {searchQuery && (
            <motion.button
              type="button"
              className="search-clear"
              onClick={() => setSearchQuery('')}
              title="Clear search"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX />
            </motion.button>
          )}
        </div>

        <motion.div className="filter-group" whileHover={{ scale: 1.02 }}>
          <label htmlFor="filter"><FiFilter /> Filter:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-select"
          >
            <option value="all">All Tasks</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </motion.div>

        <motion.div className="filter-group" whileHover={{ scale: 1.02 }}>
          <label htmlFor="sort"><FiArrowDown /> Sort By:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-select"
          >
            <option value="createdAt">Date Created</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FilterBar;
