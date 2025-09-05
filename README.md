# 📋 Task Manager API

A simple **Task Manager** built with **Node.js, Express, and MongoDB (Mongoose)**.  
It provides a RESTful API to create, read, update, and delete tasks, with proper error handling and modular structure.

---

## ✨ Features

- 🚀 **Express.js** backend with modular routes & controllers  
- 📦 **MongoDB + Mongoose** for data persistence  
- 🛠️ **CRUD operations**:
  - Create a task  
  - Get all tasks  
  - Get a single task  
  - Update a task  
  - Delete a task  
- ⚡ Custom middleware for `notFound` and centralized `errorHandler`  
- 🔐 Environment variables managed with `.env`  
- 🧹 Clean code with async/await and structured error handling  

---

## 📂 Project Structure
task-manager/
│
├── public/ # Static files
├── routes/ # Express routes
├── controllers/ # Business logic for tasks
├── models/ # Mongoose schemas
├── middleware/ # Error handling middleware
├── db/ # Database connection
├── app.js # App entry point
├── package.json
└── .env.example # Example environment variables

## ⚙️ Setup & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/task-manager.git
cd task-manager

### 2. Install dependencies 
npm install

### 3. Set up the env
PORT=your-port-here
MONGO_URI=your-mongodb-uri-here

### 4. Run Server
npm run start

###5.  For development with auto-reload
npm run dev



