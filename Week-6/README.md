# 📓 Week 6 – React State Management & MERN Stack

## Description

This folder covers advanced React concepts including Context API for global state management, a users management app, and a full MERN (MongoDB, Express, React, Node.js) mini application that connects a React frontend to an Express/MongoDB backend.

## 🎯 Objectives

- Implement React Context API for global state management
- Build a users CRUD application in React
- Develop a complete MERN stack mini application
- Connect React frontend to Express REST API backend
- Understand full-stack data flow

## 🛠️ Technologies Used

- React.js (Vite)
- React Context API
- Node.js / Express.js
- MongoDB / Mongoose
- Axios / Fetch API
- HTML5 / CSS3

## 📁 Folder Structure

```
Week-6/
│
├── MERN-MINI-APP/             # Full MERN Stack Application
│   ├── Backend/               # Express + MongoDB backend
│   │   ├── APIs/              # REST API routes
│   │   ├── models/            # Mongoose schemas
│   │   ├── server.js          # Express server
│   │   ├── req.http           # API test requests
│   │   └── package.json
│   └── frontend/              # React frontend (Vite)
│       ├── src/               # React components and pages
│       ├── index.html
│       └── package.json
│
├── context-app/               # React Context API App
│   ├── src/                   # Components using Context
│   ├── index.html
│   └── package.json
│
├── users-app/                 # React Users Management App
│   ├── src/                   # Users CRUD components
│   ├── public/
│   ├── index.html
│   └── package.json
│
└── README.md
```

## 📋 Projects Included

| Project | Description |
|---------|-------------|
| `MERN-MINI-APP/` | Full-stack MERN app — React UI connected to Express + MongoDB backend |
| `context-app/` | React app demonstrating Context API for global state sharing |
| `users-app/` | React app for managing users with CRUD operations |

## ▶️ How to Run

```bash
# MERN Mini App - Backend
cd MERN-MINI-APP/Backend
npm install
node server.js
# Backend runs on: http://localhost:5000

# MERN Mini App - Frontend
cd MERN-MINI-APP/frontend
npm install
npm run dev
# Frontend runs on: http://localhost:5173

# Context App
cd context-app
npm install
npm run dev

# Users App
cd users-app
npm install
npm run dev
```
