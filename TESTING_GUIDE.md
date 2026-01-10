# 🧪 Testing Guide - Authentication Features

## Quick Test Scenarios

### ✅ Scenario 1: New User Registration

**Steps:**
1. Start the application (backend + frontend)
2. You'll see the login page
3. Click "Sign Up"
4. Fill in:
   - Name: `John Doe`
   - Email: `john@test.com`
   - Password: `password123`
5. Click "Sign Up"

**Expected Result:**
- ✓ Account created successfully
- ✓ Automatically logged in
- ✓ See welcome message "Welcome, John Doe!"
- ✓ Empty task list displayed
- ✓ Can create tasks

---

### ✅ Scenario 2: Existing User Login

**Steps:**
1. Go to login page
2. Enter:
   - Email: `john@test.com`
   - Password: `password123`
3. Click "Login"

**Expected Result:**
- ✓ Successfully logged in
- ✓ See your previously created tasks
- ✓ Welcome message with your name

---

### ✅ Scenario 3: Task Isolation (Multi-User)

**Purpose:** Verify each user sees only their own tasks

**Steps:**
1. **User A:**
   - Sign up as `alice@test.com`
   - Create tasks: "Alice Task 1", "Alice Task 2"
   - Logout

2. **User B:**
   - Sign up as `bob@test.com`
   - Create tasks: "Bob Task 1", "Bob Task 2"
   - Verify: Cannot see Alice's tasks
   - Logout

3. **User A Again:**
   - Login as `alice@test.com`
   - Verify: See only "Alice Task 1" and "Alice Task 2"
   - Verify: Bob's tasks are not visible

**Expected Result:**
- ✓ Each user sees only their own tasks
- ✓ Tasks are completely isolated
- ✓ No data leakage between users

---

### ✅ Scenario 4: Session Persistence

**Steps:**
1. Login to your account
2. Create some tasks
3. Close the browser tab
4. Open the app again in new tab
5. Go to http://localhost:3000

**Expected Result:**
- ✓ Still logged in (no need to login again)
- ✓ All your tasks are visible
- ✓ Session persisted in localStorage

---

### ✅ Scenario 5: Logout Functionality

**Steps:**
1. Login to your account
2. Create/view some tasks
3. Click "Logout" button in header

**Expected Result:**
- ✓ Redirected to login page
- ✓ Tasks cleared from view
- ✓ Token removed from localStorage
- ✓ Cannot access tasks without logging in again

---

### ✅ Scenario 6: Form Validation

**Test Invalid Email:**
1. Try to signup with email: `notanemail`

**Expected:** Error - invalid email format

**Test Short Password:**
1. Try password: `123`

**Expected:** Browser validation - "minimum 6 characters"

**Test Missing Name:**
1. On signup, leave name empty

**Expected:** Browser validation - "required field"

---

### ✅ Scenario 7: Wrong Credentials

**Steps:**
1. Try to login with:
   - Email: `wrong@test.com`
   - Password: `wrongpass`

**Expected Result:**
- ✓ Error message: "Invalid credentials" or similar
- ✓ Not logged in
- ✓ Stay on login page

---

### ✅ Scenario 8: Duplicate Email Prevention

**Steps:**
1. Sign up with `duplicate@test.com`
2. Logout
3. Try to sign up again with `duplicate@test.com`

**Expected Result:**
- ✓ Error message: "User already exists"
- ✓ Cannot create duplicate account
- ✓ Existing account unaffected

---

### ✅ Scenario 9: Protected Routes

**Steps:**
1. Logout (or clear localStorage)
2. Open browser console (F12)
3. Try to manually call API:
   ```javascript
   fetch('http://localhost:5000/api/tasks')
     .then(r => r.json())
     .then(console.log)
   ```

**Expected Result:**
- ✓ 401 Unauthorized error
- ✓ Message: "Not authorized, no token"
- ✓ No tasks returned

---

### ✅ Scenario 10: Full User Journey

**Complete workflow test:**

1. **Sign Up**
   - Create account: `test@example.com`
   - Password: `test123`
   - Name: `Test User`

2. **Add Tasks**
   - Create: "Complete homework" (High, tomorrow)
   - Create: "Buy groceries" (Medium, today)
   - Create: "Call mom" (Low, next week)

3. **Manage Tasks**
   - Mark "Buy groceries" as complete
   - Edit "Complete homework" - change to Medium
   - Delete "Call mom"

4. **Use Filters**
   - Filter: Pending (should see 1 task)
   - Filter: Completed (should see 1 task)
   - Filter: All (should see 2 tasks total)

5. **Logout and Login**
   - Logout
   - Login again with same credentials
   - Verify all tasks are still there

6. **Responsive Test**
   - Press F12 → Device Toolbar
   - Test mobile view (375px)
   - Verify UI looks good
   - Test adding task on mobile

**Expected Result:**
- ✓ All operations work smoothly
- ✓ Data persists across sessions
- ✓ UI responsive on all devices

---

## Common Test Issues

### Issue: "Cannot connect to backend"
**Check:**
- Backend server running on port 5000?
- MongoDB connected?
- Check backend terminal for errors

### Issue: "Tasks not persisting"
**Check:**
- MongoDB connection string correct in .env?
- User logged in?
- Check browser console for errors

### Issue: "Login not working"
**Check:**
- Correct email/password?
- Backend server running?
- Check network tab in browser dev tools

---

## Test Data Cleanup

### Clear All Test Data
```javascript
// In MongoDB Atlas
// Go to Collections → Browse Collections
// Select 'tasks' or 'users' → Delete documents
```

### Clear User Session
```javascript
// In browser console (F12)
localStorage.clear();
location.reload();
```

---

## Automated Test Commands (Future)

```bash
# Unit tests (to be added)
npm test

# E2E tests (to be added)
npm run test:e2e

# API tests with Postman
# Import postman_collection.json and run
```

---

## Test Coverage

- ✅ User Registration
- ✅ User Login
- ✅ User Logout
- ✅ Task CRUD with Auth
- ✅ Task Isolation per User
- ✅ Session Management
- ✅ Form Validation
- ✅ Error Handling
- ✅ Protected Routes
- ✅ Token Expiration
- ✅ Responsive Design

---

**Happy Testing! 🚀**

For detailed authentication docs, see [AUTHENTICATION_GUIDE.md](AUTHENTICATION_GUIDE.md)
