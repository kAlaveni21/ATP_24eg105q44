# 📔 Week 7 – Full-Stack Blog Application (MERN)

## Description

This folder contains the complete full-stack Blog Application built using the MERN stack (MongoDB, Express, React, Node.js). It integrates role-based backend APIs with a React frontend, forming a production-like blogging platform with Admin, Author, and User roles.

## 🎯 Objectives

- Build a complete full-stack MERN application
- Integrate React frontend with Express REST API
- Implement role-based access control (Admin, Author, User)
- Manage authentication using JWT tokens
- Connect React frontend to a cloud MongoDB database (Atlas)

## 🛠️ Technologies Used

- React.js (Vite)
- Node.js / Express.js
- MongoDB Atlas / Mongoose
- JWT Authentication
- Axios
- HTML5 / CSS3

## 📁 Folder Structure

```
Week-7/
│
├── Blog-app-Backend/          # Express + MongoDB Blog Backend
│   ├── APIs/
│   │   ├── AdminAPI.js        # Admin-only blog management routes
│   │   ├── AuthorAPI.js       # Author blog CRUD routes
│   │   ├── CommonAPI.js       # Public blog reading routes
│   │   └── UserAPI.js         # User auth routes (register/login)
│   ├── middlewares/           # JWT auth & role-check middleware
│   ├── models/                # Mongoose schemas (User, Blog)
│   ├── config/                # DB connection config
│   ├── server.js              # Main Express server
│   ├── admin-req.http         # Admin API test requests
│   ├── author-req.http        # Author API test requests
│   ├── user-req.http          # User API test requests
│   ├── .env                   # Environment variables
│   └── package.json
│
├── blog-app-frontend/         # React Blog Frontend (Vite)
│   ├── src/                   # Pages and components
│   ├── public/                # Static assets
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── Blog-app/                  # (Alternate / Base Blog App)
│
└── README.md
```

## 📋 API Endpoints

### 🙍 User (Auth)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT token |

### 📖 Common (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Get all published blogs |
| GET | `/blogs/:id` | Get a single blog post |

### ✍️ Author (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/blogs` | Create a new blog post |
| PUT | `/blogs/:id` | Update own blog post |
| DELETE | `/blogs/:id` | Delete own blog post |

### 🛡️ Admin (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/users` | View all registered users |
| DELETE | `/admin/users/:id` | Remove a user |
| DELETE | `/admin/blogs/:id` | Remove any blog post |

## ▶️ How to Run

```bash
# 1. Start Backend
cd Blog-app-Backend
npm install
# Configure .env with MONGO_URI and JWT_SECRET
node server.js
# Backend runs on: http://localhost:5000

# 2. Start Frontend
cd blog-app-frontend
npm install
npm run dev
# Frontend runs on: http://localhost:5173
```

## ⚙️ Environment Variables (`.env`)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
