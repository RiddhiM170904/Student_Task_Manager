# Next Steps - Getting Your Project Running

## 🎯 You're Almost Ready!

Your Student Task Manager project has been created with all the required files and code. Now you just need to install dependencies and set up MongoDB.

---

## Step 1: Install Dependencies

### Option A: Automated (Recommended)
Open PowerShell in the project root and run:
```powershell
.\setup.ps1
```

### Option B: Manual Installation

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

---

## Step 2: Set Up MongoDB Atlas (FREE - 5 minutes)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up with email (it's free!)

2. **Create a Cluster**
   - Choose "FREE" tier (M0)
   - Select a cloud provider (AWS recommended)
   - Choose a region close to you
   - Click "Create Cluster" (takes 1-3 minutes)

3. **Create Database User**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `taskmanager`
   - Password: Click "Autogenerate Secure Password" (COPY THIS!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Click "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://taskmanager:<password>@cluster...`)
   - Replace `<password>` with the password you copied earlier

---

## Step 3: Configure Environment Variables

### Backend Configuration

1. Navigate to the backend folder
2. Copy `.env.example` to `.env`:
   ```bash
   cd backend
   copy .env.example .env
   ```

3. Edit `backend/.env` with your values:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://taskmanager:YOUR_PASSWORD@cluster.xxxxx.mongodb.net/student-task-manager?retryWrites=true&w=majority
   JWT_SECRET=my_super_secret_jwt_key_12345
   NODE_ENV=development
   ```

   **Important:** Replace:
   - `YOUR_PASSWORD` with your actual MongoDB password
   - `cluster.xxxxx` with your actual cluster name
   - `JWT_SECRET` with any random string (keep it secret!)

### Frontend Configuration

1. Navigate to frontend folder
2. Copy `.env.example` to `.env`:
   ```bash
   cd frontend
   copy .env.example .env
   ```

3. The file should contain:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
   (No changes needed for local development)

---

## Step 4: Run the Application

### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB Connected: cluster.xxxxx.mongodb.net
```

### Start Frontend (Terminal 2 - New Window)
```bash
cd frontend
npm run dev
```

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
```

---

## Step 5: Test the Application

1. **Open Browser**
   - Go to http://localhost:3000

2. **Create Your First Task**
   - Click "➕ Add Task" button
   - Fill in the form:
     - Title: "Complete project setup"
     - Description: "Set up MongoDB and test the app"
     - Priority: High
     - Due Date: Tomorrow's date
   - Click "Add Task"

3. **Test Features**
   - ✅ Mark the task as complete (checkbox)
   - ✏️ Edit the task
   - 🗑️ Delete the task
   - Try the filter dropdown (All/Pending/Completed)
   - Try the sort dropdown

4. **Test Responsive Design**
   - Press F12 to open Developer Tools
   - Click the device toolbar icon (mobile view)
   - Test on different screen sizes

---

## Step 6: Test API with Postman (Optional)

1. **Install Postman**
   - Download from https://www.postman.com/downloads/

2. **Import Collection**
   - Open Postman
   - Click "Import"
   - Drag and drop `postman_collection.json`

3. **Test Endpoints**
   - Try "Create Task"
   - Try "Get All Tasks"
   - Try "Update Task"

---

## 🎉 Congratulations!

Your Student Task Manager is now running! Here's what you've accomplished:

✅ Full-stack MERN application  
✅ CRUD operations working  
✅ Database connected  
✅ Responsive UI  
✅ Modern development setup  

---

## Common Issues & Solutions

### ❌ "Cannot connect to MongoDB"
**Solution:** 
- Check internet connection
- Verify MongoDB Atlas IP whitelist (0.0.0.0/0)
- Double-check password in .env file (no spaces!)
- Ensure connection string is correct

### ❌ "Port 5000 already in use"
**Solution:**
```powershell
# Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

### ❌ "Frontend can't connect to backend"
**Solution:**
- Ensure backend is running (check Terminal 1)
- Verify backend is on port 5000
- Check `VITE_API_URL` in frontend/.env
- Clear browser cache (Ctrl+Shift+R)

### ❌ "npm install fails"
**Solution:**
```bash
# Delete node_modules and try again
rm -rf node_modules
rm package-lock.json
npm install
```

---

## What's Next?

### Before Deployment
- [ ] Test all features thoroughly
- [ ] Take screenshots of your application
- [ ] Update README.md with your information
- [ ] Create a GitHub repository

### Deployment
- [ ] Push code to GitHub
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render
- [ ] Update frontend env with production backend URL

### Documentation
- [ ] Add screenshots to README
- [ ] Update live demo links
- [ ] Write project summary (5-8 lines)

---

## Need Help?

1. **Check Documentation**
   - README.md - Main documentation
   - DEVELOPMENT_GUIDE.md - Detailed guide
   - HOW_TO_RUN.md - Quick start

2. **Common Resources**
   - MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
   - React Docs: https://react.dev
   - Express Docs: https://expressjs.com

3. **Check Console**
   - Backend: Check Terminal 1 for errors
   - Frontend: Check Terminal 2 for errors
   - Browser: Press F12 and check Console tab

---

## Files to Review

- `README.md` - Complete project documentation
- `DEVELOPMENT_GUIDE.md` - Developer guide with detailed instructions
- `PROJECT_SUMMARY.md` - Deliverable summary for submission
- `CHECKLIST.md` - Complete feature checklist

---

**You're all set! Happy coding! 🚀**
