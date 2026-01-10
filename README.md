# 📝 Student Task Manager

A full-stack task management web application built with the MERN stack, demonstrating end-to-end development skills including CRUD operations, state management, API integration, authentication, and responsive design.

![Student Task Manager](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Student+Task+Manager)

## 🚀 Live Demo

- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app) _(Deploy to Vercel)_
- **Backend API**: [https://your-api.render.com](https://your-api.render.com) _(Deploy to Render)_

## 📸 Screenshots

_Add your screenshots here after deployment_

## ✨ Features

### Core Features
- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks
- ✅ **Task Management**: Add tasks with title, description, due date, and priority levels (low/medium/high)
- ✅ **Task Completion**: Toggle tasks between complete and incomplete states
- ✅ **Filtering**: View All tasks, Pending tasks, or Completed tasks
- ✅ **Sorting**: Sort tasks by date created, due date, or priority
- ✅ **Search**: Real-time client-side search by title or description
- ✅ **Responsive Design**: Mobile-first design that works on all devices
- ✅ **Persistent Storage**: All tasks stored in MongoDB Atlas
- ✅ **Real-time Updates**: UI updates immediately after any action

### Authentication & Security (Fully Implemented)
- ✅ **User Signup/Login**: JWT-based authentication system
- ✅ **Private Tasks**: Each user has their own isolated task list
- ✅ **Secure Passwords**: Bcrypt hashing for password protection
- ✅ **Token Management**: Automatic token handling and session management
- ✅ **Protected Routes**: All task endpoints require authentication

### Additional Features
- ✅ **Instant Search**: Search tasks by keywords with real-time filtering
- ✅ **Search Counter**: Shows number of search results
- ✅ **Overdue Detection**: Visual indicators for overdue tasks
- ✅ **Empty States**: Helpful messages when no tasks are available
- ✅ **Loading States**: Smooth loading indicators
- ✅ **User Welcome**: Personalized greeting with user name

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Custom styling (no framework dependencies)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### DevOps & Tools
- **Git & GitHub** - Version control
- **Vercel** - Frontend deployment
- **Render/Heroku** - Backend deployment
- **MongoDB Atlas** - Cloud database
- **Postman** - API testing

## 📁 Project Structure

```
Student_Task_Manager/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── taskController.js     # Task CRUD logic
│   │   └── authController.js     # Authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── Task.js               # Task schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── taskRoutes.js         # Task endpoints
│   │   └── authRoutes.js         # Auth endpoints
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js            # API service layer
│   │   ├── components/
│   │   │   ├── Header.jsx        # App header
│   │   │   ├── TaskList.jsx      # Task list container
│   │   │   ├── TaskCard.jsx      # Individual task card
│   │   │   ├── AddTaskForm.jsx   # Add task modal
│   │   │   ├── EditTaskModal.jsx # Edit task modal
│   │   │   └── FilterBar.jsx     # Filter and sort controls
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── .env.example
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier works)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Student_Task_Manager.git
   cd Student_Task_Manager
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

3. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

   Start the frontend development server:
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (supports `?status=pending/completed`) |
| GET | `/api/tasks/:id` | Get single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Authentication (Optional)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user and get JWT token |

### Example Request Body (Create Task)
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "priority": "high",
  "dueDate": "2026-01-15"
}
```

## 🎨 UI Components

### Main Components
- **Header**: Application title and "Add Task" button
- **FilterBar**: Filter by status and sort options
- **TaskList**: Displays all tasks or empty state
- **TaskCard**: Individual task with actions (edit, delete, complete)
- **AddTaskForm**: Modal form for creating tasks
- **EditTaskModal**: Modal form for editing tasks

## 🧪 Testing

### Manual Testing with Postman

1. **Test Task Creation**
   - POST `http://localhost:5000/api/tasks`
   - Body: `{ "title": "Test Task", "dueDate": "2026-01-20", "priority": "medium" }`

2. **Test Getting Tasks**
   - GET `http://localhost:5000/api/tasks`

3. **Test Filtering**
   - GET `http://localhost:5000/api/tasks?status=pending`

### Frontend Testing
- Form validation (required fields)
- Task completion toggle
- Filter and sort functionality
- Responsive design on mobile devices

## 🚢 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set build settings:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variable:
   - `VITE_API_URL`: Your backend URL
6. Deploy!

### Backend (Render)

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secret key
   - `NODE_ENV`: `production`
6. Deploy!

### MongoDB Atlas

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up database access (username/password)
4. Whitelist IP addresses (0.0.0.0/0 for development)
5. Get your connection string
6. Replace `<username>` and `<password>` in the connection string

## 📚 What I Learned

- **Full-stack development**: Connecting React frontend with Express backend
- **RESTful API design**: Creating proper API endpoints and HTTP methods
- **Database modeling**: Designing schemas with Mongoose
- **State management**: Managing application state in React with hooks
- **Authentication**: Implementing JWT-based auth flow
- **Responsive design**: Building mobile-first UI with CSS
- **Deployment**: Deploying full-stack apps to cloud platforms

## 🎯 Challenges & Solutions

1. **Challenge**: Managing state across multiple components
   - **Solution**: Lifted state up to the main App component and passed down props

2. **Challenge**: Handling asynchronous API calls
   - **Solution**: Used async/await with try-catch blocks and loading states

3. **Challenge**: Date formatting across different timezones
   - **Solution**: Stored dates in ISO format and formatted on display

## 🔮 Future Enhancements

- [ ] Drag-and-drop task reordering
- [ ] Email notifications for overdue tasks
- [ ] Task categories/tags
- [ ] Recurring tasks
- [ ] Dark mode
- [ ] Export tasks to CSV
- [ ] Collaborative task sharing
- [ ] Real-time updates with WebSockets

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Project requirements and guidance from course instructors
- MongoDB documentation
- React and Express communities

---

**Note**: This project was created as part of a full-stack development course to demonstrate CRUD operations, API integration, and modern web development practices.