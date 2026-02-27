# JWT Authentication App with Express, React, and Aiven MySQL

A complete user authentication system built with Express.js backend, React frontend, and Aiven MySQL database.

## Features

- User registration (signup) with username, email, phone (optional), and password
- User login with email and password
- JWT token-based authentication
- Protected routes
- Welcome page with user information and logout functionality
- Form validation and error handling
- Responsive design

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  role ENUM('USER', 'ADMIN') DEFAULT 'USER',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Setup Instructions

### 1. Backend Setup

1. Navigate to the project directory:
```bash
cd pro2
```

2. Install backend dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file with your Aiven MySQL credentials:
```env
# Aiven MySQL Database Configuration
DB_HOST=your-aiven-mysql-host.aivencloud.com
DB_PORT=25060
DB_USER=avnadmin
DB_PASSWORD=your-password
DB_NAME=auth_db

# JWT Secret Key
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/signup` - Register a new user
- `POST /api/login` - Login user and get JWT token
- `GET /api/profile` - Get user profile (protected route)

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Click on "Sign Up" to create a new account
3. Fill in the required fields (username, email, password) and optional phone
4. After successful registration, you'll be redirected to the welcome page
5. Use the logout button to sign out and return to the login page

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- CORS enabled
- Environment variable configuration

## Technologies Used

### Backend
- Express.js
- MySQL2 (for Aiven MySQL connection)
- bcryptjs (password hashing)
- jsonwebtoken (JWT tokens)
- express-validator (input validation)
- cors (Cross-Origin Resource Sharing)

### Frontend
- React 18
- React Router DOM
- Axios (HTTP client)

## Database Connection

The app connects to Aiven MySQL using SSL configuration. Make sure your Aiven MySQL service is running and you have the correct connection details in your `.env` file.

## Development

For development, you can run both backend and frontend simultaneously:

Backend (in pro2 directory):
```bash
npm run dev
```

Frontend (in client directory):
```bash
npm start
```

The backend runs on port 5000 and the frontend on port 3000.
