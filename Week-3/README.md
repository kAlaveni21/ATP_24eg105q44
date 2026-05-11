# 📙 Week 3 – Backend Development with Node.js & MongoDB

## Description

This folder covers backend development using Node.js and Express.js. It includes two sub-projects: a pure in-memory REST API (`Backend`) and a database-connected REST API using MongoDB and Mongoose (`Backend-DB`).

## 🎯 Objectives

- Set up a Node.js/Express HTTP server
- Build RESTful APIs (CRUD operations)
- Connect to MongoDB using Mongoose ODM
- Understand schema design and model creation
- Apply middleware for request handling

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- VS Code / REST Client (`.http` files)

## 📁 Folder Structure

```
Week-3/
│
├── Backend/                   # Express REST API (In-Memory, no DB)
│   ├── APIs/
│   │   ├── UserAPI.js         # User CRUD endpoints
│   │   └── productAPI.js      # Product CRUD endpoints
│   ├── server.js              # Express server setup
│   ├── product.js             # Product data
│   ├── req.http               # HTTP request test file
│   ├── package.json
│   └── README.md
│
├── Backend-DB/                # Express REST API with MongoDB
│   ├── APIs/
│   │   ├── UserAPI.js         # User CRUD with Mongoose
│   │   └── ProductAPI.js      # Product CRUD with Mongoose
│   ├── models/                # Mongoose schemas/models
│   ├── middlewares/           # Express middlewares
│   ├── auth/                  # Authentication logic
│   ├── server.js              # Express + MongoDB server
│   ├── req.http               # HTTP test requests
│   ├── req1.http              # Additional HTTP test requests
│   ├── test.js                # Test script
│   ├── package.json
│   └── README.md
│
└── README.md
```

## 📋 Projects Included

| Project | Description |
|---------|-------------|
| `Backend/` | In-memory REST API with User and Product endpoints using Express |
| `Backend-DB/` | Full REST API connected to MongoDB via Mongoose with auth and middleware |

## 🔗 API Endpoints

### Backend (In-Memory)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| POST | `/users` | Create a user |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |
| GET | `/products` | Get all products |
| POST | `/products` | Create a product |

### Backend-DB (MongoDB)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users from DB |
| POST | `/users` | Create user in DB |
| PUT | `/users/:id` | Update user in DB |
| DELETE | `/users/:id` | Delete user from DB |
| GET | `/products` | Get all products from DB |
| POST | `/products` | Create product in DB |

## ▶️ How to Run

```bash
# Backend (In-Memory)
cd Backend
npm install
node server.js

# Backend-DB (MongoDB required)
cd Backend-DB
npm install
node server.js
```
