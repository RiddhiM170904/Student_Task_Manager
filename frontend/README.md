# Frontend README

## Student Task Manager - Frontend

React-based frontend application for managing student tasks with a clean, responsive UI.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
```

For production, update this to your deployed backend URL.

### 3. Run the Application

Development mode:
```bash
npm run dev
```

The app will start on `http://localhost:3000`

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Features

### Task Management
- Create tasks with title, description, priority, and due date
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Visual indicators for task priority (color-coded borders)
- Overdue task detection

### Filtering & Sorting
- Filter by status: All, Pending, Completed
- Sort by: Date Created, Due Date, Priority
- Real-time filtering without page reload

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interfaces
- Accessible forms and buttons

## Project Structure

```
src/
├── api/
│   └── api.js              # API service layer
├── components/
│   ├── Header.jsx          # App header with title and add button
│   ├── FilterBar.jsx       # Filter and sort controls
│   ├── TaskList.jsx        # Task list container
│   ├── TaskCard.jsx        # Individual task display
│   ├── AddTaskForm.jsx     # Modal for adding tasks
│   └── EditTaskModal.jsx   # Modal for editing tasks
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles and CSS variables
```

## Components

### App.jsx
Main application component that manages:
- Task state
- CRUD operations
- Filter and sort logic
- Modal visibility

### Header
- Displays app title
- "Add Task" button to open create modal

### FilterBar
- Status filter dropdown (All/Pending/Completed)
- Sort dropdown (Date Created/Due Date/Priority)

### TaskList
- Renders array of tasks
- Shows empty state when no tasks
- Displays task count

### TaskCard
- Individual task display
- Checkbox for completion toggle
- Priority badge
- Due date with overdue indicator
- Edit and delete buttons

### AddTaskForm
- Modal form for creating tasks
- Form validation
- Required field indicators

### EditTaskModal
- Modal form for editing tasks
- Pre-filled with current task data
- Completion checkbox

## Styling

### CSS Architecture
- CSS custom properties (variables) for theming
- Mobile-first responsive design
- BEM-like naming conventions
- Modular component styles

### Color Scheme
- Primary: Indigo (#4f46e5)
- Success: Green (#10b981)
- Warning: Amber (#f59e0b)
- Danger: Red (#ef4444)

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: < 768px
- Desktop: ≥ 768px

## State Management

Currently uses React's built-in state with hooks:
- `useState` for component state
- `useEffect` for side effects and API calls

## API Integration

The app communicates with the backend through the API service layer (`src/api/api.js`):
- Axios instance with baseURL configuration
- Centralized API calls
- Error handling
- Response data extraction

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Set root directory to `frontend`
   - Framework preset: Vite
   - Add environment variable: `VITE_API_URL` = your backend URL
   - Deploy!

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Set environment variable:
   - `VITE_API_URL` = your backend URL

### Manual Deployment

1. Build:
   ```bash
   npm run build
   ```

2. The `dist` folder contains static files ready for any hosting service

## Environment Variables

- `VITE_API_URL`: Backend API base URL
  - Development: `http://localhost:5000`
  - Production: Your deployed backend URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading for modals
- Optimized re-renders
- Efficient state updates
- Minimal dependencies

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus indicators
- ARIA labels where needed
- Form validation messages

## Future Improvements

- Add React Router for multi-page navigation
- Implement Context API for global state
- Add React Query for data fetching
- Implement optimistic UI updates
- Add animations and transitions
- Implement search functionality
- Add task categories/tags
- Dark mode toggle

## Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **axios**: HTTP client

## Dev Dependencies

- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
