# Backend README

## Student Task Manager - Backend API

RESTful API for the Student Task Manager application built with Node.js, Express, and MongoDB.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/student-task-manager?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### 3. MongoDB Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string and update `MONGODB_URI` in `.env`

### 4. Run the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
Some endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Tasks

**Get All Tasks**
```
GET /api/tasks
Query Parameters:
  - status: 'pending' | 'completed' (optional)
  - userId: string (optional)
```

**Get Single Task**
```
GET /api/tasks/:id
```

**Create Task**
```
POST /api/tasks
Body: {
  "title": "Task title",
  "description": "Task description",
  "priority": "low" | "medium" | "high",
  "dueDate": "2026-01-15",
  "userId": "optional_user_id"
}
```

**Update Task**
```
PUT /api/tasks/:id
Body: {
  "title": "Updated title",
  "description": "Updated description",
  "priority": "high",
  "dueDate": "2026-01-20",
  "completed": true
}
```

**Delete Task**
```
DELETE /api/tasks/:id
```

#### Authentication

**Sign Up**
```
POST /api/auth/signup
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login**
```
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
}
```

## Data Models

### Task
```javascript
{
  _id: ObjectId,
  userId: ObjectId,      // Optional
  title: String,         // Required
  description: String,
  priority: String,      // 'low', 'medium', 'high'
  dueDate: Date,        // Required
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,         // Unique
  password: String,      // Hashed
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

All endpoints return errors in the following format:
```json
{
  "success": false,
  "message": "Error message here",
  "error": "Detailed error (in development mode)"
}
```

## Testing with Postman

1. Import the API endpoints into Postman
2. Create an environment with `baseURL` = `http://localhost:5000`
3. Test each endpoint with sample data
4. For protected routes, add the JWT token to Authorization header

## Deployment

### Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect repository
4. Set environment variables
5. Deploy

### Railway

1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Add environment variables: `railway variables`
5. Deploy: `railway up`

## Scripts

- `npm start` - Start the server
- `npm run dev` - Start with nodemon (auto-restart)

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Enable CORS
- **dotenv**: Environment variables
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication

## Dev Dependencies

- **nodemon**: Auto-restart server on file changes
