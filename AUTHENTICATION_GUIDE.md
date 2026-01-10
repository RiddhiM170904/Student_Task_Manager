# 🔐 Authentication Integration Guide

## Overview
User authentication has been successfully integrated into the Student Task Manager. Users must now sign up or login to access their tasks. Each user has their own private task list.

## What's New

### Backend Changes
✅ **Protected Routes** - All task endpoints now require authentication
✅ **User Association** - Tasks are automatically linked to the logged-in user
✅ **JWT Tokens** - Secure token-based authentication
✅ **Data Isolation** - Users can only access their own tasks

### Frontend Changes
✅ **Login/Signup UI** - Beautiful authentication form
✅ **Session Management** - Automatic token handling
✅ **User Display** - Shows logged-in user name in header
✅ **Logout Functionality** - Secure logout with data cleanup
✅ **Auto-redirect** - Redirects to login if session expires

## How It Works

### User Flow
1. **First Visit** → User sees login/signup form
2. **Sign Up** → Create account with name, email, password
3. **Login** → Access account with email and password
4. **Manage Tasks** → Create, edit, delete personal tasks
5. **Logout** → Securely end session

### Authentication Process
```
1. User submits credentials
   ↓
2. Backend validates and generates JWT token
   ↓
3. Frontend stores token in localStorage
   ↓
4. Token sent with every API request
   ↓
5. Backend verifies token and identifies user
   ↓
6. User accesses only their own tasks
```

## Testing Authentication

### Test Signup
1. Click "Sign Up" on the login page
2. Enter:
   - Name: `Test User`
   - Email: `test@example.com`
   - Password: `test123`
3. Click "Sign Up"
4. You should be logged in automatically

### Test Login
1. Use existing credentials
2. Click "Login"
3. Access your tasks

### Test Multiple Users
1. Create Account A (user1@test.com)
2. Add some tasks
3. Logout
4. Create Account B (user2@test.com)
5. Notice: Account B sees empty task list
6. Add different tasks
7. Logout and login as Account A
8. Notice: Only Account A's tasks are visible

## Security Features

### Password Security
- Passwords are hashed with bcrypt (never stored in plain text)
- Minimum 6 characters required
- Salted hashing prevents rainbow table attacks

### Token Security
- JWT tokens expire after 30 days
- Tokens stored securely in localStorage
- Server validates every request
- Automatic logout on token expiration

### Data Isolation
- Users can only see/modify their own tasks
- Backend enforces user ownership checks
- Database queries filtered by userId

## API Changes

### Before Authentication
```javascript
// Old: Anyone could access any task
GET /api/tasks
POST /api/tasks
```

### After Authentication
```javascript
// New: Requires Authorization header
GET /api/tasks
Headers: { Authorization: "Bearer <token>" }

POST /api/tasks
Headers: { Authorization: "Bearer <token>" }
Body: { title, description, priority, dueDate }
// userId is auto-assigned from token
```

## Frontend Code Examples

### Making Authenticated Requests
```javascript
// Token is automatically added by axios interceptor
const tasks = await getTasks();
// Header: Authorization: Bearer <token>
```

### Checking Login Status
```javascript
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

if (token && user) {
  // User is logged in
  setUser(JSON.parse(user));
}
```

### Logout
```javascript
const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  setUser(null);
  setTasks([]);
};
```

## Troubleshooting

### "Session expired" Error
**Cause**: JWT token has expired  
**Solution**: Login again to get a new token

### "Unauthorized" Error
**Cause**: No token or invalid token  
**Solution**: 
1. Check if logged in
2. Try logging out and back in
3. Clear browser cache

### Tasks Not Showing
**Cause**: Logged in as different user  
**Solution**: Tasks are user-specific. Each account has separate tasks.

### Can't Login
**Cause**: Wrong credentials  
**Solution**: 
1. Check email/password spelling
2. Reset password (feature to be added)
3. Create new account

## Environment Variables

No changes needed! The existing setup works with authentication:

**Backend (.env)**
```env
JWT_SECRET=riddhi_task_manager_secret_key_2026
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000
```

## Database Changes

### Task Model Update
```javascript
userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: true, // Now required!
}
```

### User Collection
New collection created automatically:
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

## Testing Checklist

- [ ] Sign up with new account
- [ ] Login with existing account
- [ ] Create tasks (should be linked to user)
- [ ] Logout
- [ ] Login as different user
- [ ] Verify tasks are separate per user
- [ ] Test logout functionality
- [ ] Test session expiration handling
- [ ] Verify password validation (6+ chars)
- [ ] Test email validation

## Deployment Notes

### Environment Variables
Set `JWT_SECRET` in production:
- Render: Add to Environment Variables
- Vercel: No changes needed

### Security Checklist
- [ ] Use strong JWT_SECRET in production
- [ ] Enable HTTPS
- [ ] Set secure cookie flags (if using cookies)
- [ ] Configure CORS properly
- [ ] Rate limit authentication endpoints

## Next Enhancements

Potential future features:
- [ ] Password reset via email
- [ ] Email verification
- [ ] Social login (Google, GitHub)
- [ ] Two-factor authentication (2FA)
- [ ] Remember me functionality
- [ ] Profile page
- [ ] Change password
- [ ] Delete account

## Support

If you encounter issues:
1. Check browser console for errors
2. Check backend terminal for errors
3. Verify MongoDB connection
4. Clear localStorage and try again
5. Restart both frontend and backend servers

---

**Authentication is now live! 🎉**

All tasks are private to each user. Sign up to get started!
