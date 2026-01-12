# Deployment Guide

## Backend Deployment (Render)

### Steps to Deploy:

1. **Push to GitHub**
   - Make sure your code is pushed to a GitHub repository
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Create Render Account**
   - Go to [https://render.com](https://render.com)
   - Sign up with your GitHub account

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository: `Student_Task_Manager`
   - Configure:
     - **Name**: `student-task-manager-backend`
     - **Region**: Oregon (US West) or closest to you
     - **Branch**: `main`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

4. **Set Environment Variables**
   Click "Advanced" → "Add Environment Variable" and add:
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://riddhimhadgut17_db_user:Riddhi_Mhadgut@cluster0.nsypmvo.mongodb.net/student-task-manager?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=riddhi_task_manager_secret_key_2026
   FRONTEND_URL=https://your-app-name.vercel.app
   ```
   ⚠️ **Important**: Update `FRONTEND_URL` after deploying frontend

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete (5-10 minutes)
   - Copy your backend URL (e.g., `https://student-task-manager-backend.onrender.com`)

---

## Frontend Deployment (Vercel)

### Steps to Deploy:

1. **Create Vercel Account**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select `Student_Task_Manager`

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

4. **Set Environment Variables**
   Click "Environment Variables" and add:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   ⚠️ **Important**: Replace with your actual Render backend URL

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-5 minutes)
   - Copy your frontend URL (e.g., `https://student-task-manager.vercel.app`)

6. **Update Backend CORS**
   - Go back to Render dashboard
   - Open your backend service
   - Go to "Environment" tab
   - Update `FRONTEND_URL` with your Vercel URL
   - Save changes (will trigger automatic redeployment)

---

## Post-Deployment Steps

### 1. Update MongoDB Atlas Network Access
   - Go to MongoDB Atlas Dashboard
   - Navigate to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

### 2. Test Your Deployment
   - Visit your Vercel frontend URL
   - Try signing up a new user
   - Create a task
   - Toggle between dark/light themes
   - Verify all features work correctly

### 3. Monitor Logs
   - **Render**: Check logs in the "Logs" tab of your service
   - **Vercel**: Check "Deployments" → Click on deployment → "Runtime Logs"

---

## Important Notes

### Render Free Tier Limitations:
- ⏰ Service spins down after 15 minutes of inactivity
- ⚡ First request after inactivity takes ~30-60 seconds (cold start)
- 💾 512 MB RAM, shared CPU
- 🔄 Auto-deploys when you push to GitHub

### Vercel Free Tier Limitations:
- ✅ 100 GB bandwidth per month
- ✅ Unlimited personal projects
- ✅ Auto-deploys on git push
- ⚡ Edge network for fast loading

### Security Recommendations:
1. **Never commit `.env` files** - Already in `.gitignore`
2. **Use strong JWT_SECRET** in production
3. **Change MongoDB password** for production
4. **Enable HTTPS only** (both platforms do this by default)

---

## Troubleshooting

### Backend Issues:
- ❌ **500 Error**: Check Render logs for errors
- ❌ **MongoDB Connection Failed**: Verify MONGODB_URI is correct and IP is whitelisted
- ❌ **CORS Error**: Make sure FRONTEND_URL is set correctly

### Frontend Issues:
- ❌ **API Calls Failing**: Check if VITE_API_URL is correct
- ❌ **404 on Refresh**: Vercel.json should handle this (already configured)
- ❌ **Blank Page**: Check browser console for errors

### Common Solutions:
```bash
# Clear Vercel cache and redeploy
vercel --prod --force

# Check backend is running
curl https://your-backend-url.onrender.com/

# Check environment variables
# Render: Dashboard → Service → Environment
# Vercel: Dashboard → Project → Settings → Environment Variables
```

---

## Continuous Deployment

Both platforms auto-deploy when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main

# Render and Vercel will automatically deploy your changes!
```

---

## Custom Domain (Optional)

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Render:
1. Go to Service Settings → Custom Domain
2. Add your domain
3. Update DNS records as instructed

---

## Support

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas/
