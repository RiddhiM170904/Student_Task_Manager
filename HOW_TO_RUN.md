# How to Run the Project

## Option 1: Automated Setup (Recommended)

### Windows (PowerShell)
```powershell
.\setup.ps1
```

Then:
1. Edit `backend/.env` with your MongoDB credentials
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm run dev`

---

## Option 2: Manual Setup

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB credentials
npm run dev
```

### Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```

---

## What You Need

### 1. MongoDB Atlas (Free)
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a cluster (M0 Free tier)
- Get connection string
- Add to `backend/.env`

### 2. Environment Variables

**backend/.env**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student-task-manager
JWT_SECRET=your_random_secret_key_12345
NODE_ENV=development
```

**frontend/.env**
```env
VITE_API_URL=http://localhost:5000
```

---

## Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Test**: http://localhost:5000/api/tasks

---

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Ensure MongoDB Atlas IP whitelist includes your IP
- Check if port 5000 is available

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend/.env
- Check browser console for errors

### Dependencies installation fails
- Delete node_modules folder
- Delete package-lock.json
- Run `npm install` again
- Ensure you have Node.js v16 or higher

---

## Quick Commands

```bash
# Install all dependencies (from root)
cd backend && npm install && cd ../frontend && npm install && cd ..

# Run backend
cd backend && npm run dev

# Run frontend (in new terminal)
cd frontend && npm run dev

# Build for production
cd frontend && npm run build
```
