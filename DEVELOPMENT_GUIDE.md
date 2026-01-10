# Student Task Manager - Development Guide

## Quick Start Guide

### First Time Setup

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation: `node --version` and `npm --version`

2. **Clone the Project**
   ```bash
   git clone <your-repo-url>
   cd Student_Task_Manager
   ```

3. **Set up MongoDB Atlas** (Free)
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
   - Create a new cluster (M0 free tier)
   - Create a database user (Database Access)
   - Whitelist your IP (Network Access) - use 0.0.0.0/0 for development
   - Get connection string from "Connect" button

4. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```
   
   Edit `.env` and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student-task-manager
   JWT_SECRET=your_random_secret_key_123456
   ```

5. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   
   The `.env` file should have:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

6. **Run the Application**
   
   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open in Browser**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Development Workflow

### Making Changes

1. **Backend Changes**
   - Modify files in `backend/`
   - Server auto-restarts (nodemon)
   - Test with Postman or frontend

2. **Frontend Changes**
   - Modify files in `frontend/src/`
   - Browser auto-refreshes (Vite HMR)
   - Changes visible immediately

### Testing API with Postman

1. **Install Postman**
   - Download from [postman.com](https://www.postman.com)

2. **Import Collection** (or create manually)
   
   Example requests:
   
   **Create Task:**
   - Method: POST
   - URL: `http://localhost:5000/api/tasks`
   - Body (JSON):
   ```json
   {
     "title": "Complete assignment",
     "description": "Finish the math homework",
     "priority": "high",
     "dueDate": "2026-01-15"
   }
   ```

   **Get All Tasks:**
   - Method: GET
   - URL: `http://localhost:5000/api/tasks`

   **Update Task:**
   - Method: PUT
   - URL: `http://localhost:5000/api/tasks/<task_id>`
   - Body (JSON):
   ```json
   {
     "completed": true
   }
   ```

## Common Issues & Solutions

### Backend Issues

**Error: Cannot connect to MongoDB**
- Check internet connection
- Verify MongoDB Atlas credentials
- Whitelist IP address (0.0.0.0/0 for development)
- Check connection string format

**Port 5000 already in use**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

### Frontend Issues

**Cannot connect to backend**
- Ensure backend is running on port 5000
- Check VITE_API_URL in frontend/.env
- Check browser console for CORS errors

**Port 3000 already in use**
- Vite will automatically use next available port (3001, 3002, etc.)
- Or specify port in vite.config.js

### Database Issues

**Tasks not persisting**
- Check MongoDB connection
- Verify .env file configuration
- Check server console for errors

## Project Structure Explained

```
backend/
├── config/          # Database and other configurations
├── controllers/     # Business logic for each route
├── middleware/      # Custom middleware (auth, error handling)
├── models/          # Database schemas
├── routes/          # API endpoint definitions
└── server.js        # Entry point

frontend/
├── src/
│   ├── api/         # API calls to backend
│   ├── components/  # React components
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── public/          # Static assets
└── index.html       # HTML template
```

## Deployment Checklist

### Before Deploying

- [ ] Test all features locally
- [ ] Remove console.logs
- [ ] Update README with deployment URLs
- [ ] Create .env.example files (no secrets)
- [ ] Test with production API URL
- [ ] Check responsive design on mobile

### Frontend Deployment (Vercel)

1. Push to GitHub
2. Import project on Vercel
3. Set root directory: `frontend`
4. Add environment variable: `VITE_API_URL`
5. Deploy

### Backend Deployment (Render)

1. Push to GitHub
2. Create Web Service on Render
3. Set root directory: `backend`
4. Add environment variables (all from .env)
5. Deploy

## Git Commands

```bash
# Initial commit
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Regular commits
git add .
git commit -m "Add feature X"
git push

# Create new branch
git checkout -b feature-name
git push -u origin feature-name
```

## Useful Commands

### Backend
```bash
npm install              # Install dependencies
npm run dev             # Run with auto-restart
npm start               # Run normally
```

### Frontend
```bash
npm install              # Install dependencies
npm run dev             # Run development server
npm run build           # Build for production
npm run preview         # Preview production build
```

## Adding New Features

### Adding a New Task Field

1. **Update Backend Model** (`backend/models/Task.js`)
   ```javascript
   category: {
     type: String,
     enum: ['work', 'personal', 'study'],
   }
   ```

2. **Update Controller** (if needed for validation)

3. **Update Frontend Form** (`frontend/src/components/AddTaskForm.jsx`)
   ```jsx
   <select name="category" ...>
     <option value="work">Work</option>
     <option value="personal">Personal</option>
     <option value="study">Study</option>
   </select>
   ```

4. **Update TaskCard** to display new field

## Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Vite Guide](https://vitejs.dev)
- [Mongoose Docs](https://mongoosejs.com)

## Getting Help

- Check the console for error messages
- Read error messages carefully
- Google the error message
- Check Stack Overflow
- Review documentation

## Next Steps

- [ ] Add user authentication
- [ ] Implement search functionality
- [ ] Add task categories
- [ ] Create dashboard with statistics
- [ ] Add email notifications
- [ ] Implement dark mode
