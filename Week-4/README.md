# 📕 Week 4 – Blog Application Backend & HTML Pages

## Description

This folder contains a role-based Blog Application Backend built with Node.js, Express, and MongoDB, along with foundational HTML page assignments covering nested lists, tables, and web page structure.

## 🎯 Objectives

- Build a multi-role REST API (Admin, Author, User)
- Implement authentication and role-based access control
- Apply middleware for authorization
- Create basic HTML pages using semantic elements

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB / Mongoose
- JWT (Authentication)
- HTML5
- VS Code / REST Client (`.http` files)

## 📁 Folder Structure

```
Week-4/
│
├── Blog-app-Backend/          # Role-based Blog REST API
│   ├── APIs/
│   │   ├── AdminAPI.js        # Admin-only endpoints
│   │   ├── AuthorAPI.js       # Author blog management endpoints
│   │   ├── CommonAPI.js       # Public endpoints (view blogs)
│   │   └── UserAPI.js         # User endpoints
│   ├── middlewares/           # Auth & role middleware
│   ├── models/                # Mongoose schemas (User, Blog, etc.)
│   ├── server.js              # Main Express server
│   ├── admin-req.http         # Admin API test requests
│   ├── author-req.http        # Author API test requests
│   ├── user-req.http          # User API test requests
│   ├── .env                   # Environment variables
│   └── package.json
│
├── NestedUnorderedList.html   # HTML nested unordered list example
├── pochiTheCat.html           # HTML page about Pochi the Cat
├── webPages.html              # Basic web page structure
└── README.md
```

## 📋 API Roles & Endpoints

### 👤 Common (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Get all published blogs |
| GET | `/blogs/:id` | Get a single blog |

### ✍️ Author
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/blogs` | Create a new blog |
| PUT | `/blogs/:id` | Update own blog |
| DELETE | `/blogs/:id` | Delete own blog |

### 🛡️ Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/users` | View all users |
| DELETE | `/admin/users/:id` | Delete a user |
| DELETE | `/admin/blogs/:id` | Delete any blog |

### 🙍 User
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and get token |

## 📄 HTML Pages

| File | Description |
|------|-------------|
| `NestedUnorderedList.html` | Demonstrates nested `<ul>` and `<li>` elements |
| `pochiTheCat.html` | A styled HTML page about Pochi the Cat |
| `webPages.html` | Basic HTML page structure and layout |

## ▶️ How to Run

```bash
# Blog Backend
cd Blog-app-Backend
npm install
# Add your MongoDB URI and JWT secret to .env
node server.js

# Open HTML files directly in a browser
```
