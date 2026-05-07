# 🚀 HackerNews Pro

A modern full-stack Hacker News clone built using the MERN stack. This application fetches trending Hacker News stories, provides JWT-based authentication, allows users to bookmark stories, and features a premium responsive UI.

---

# 🌐 Live Demo

## Frontend
https://full-stack-task-frontend.vercel.app/
## Backend
https://full-stack-task-backend.onrender.com

---

# ✨ Features

## 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Logout Functionality
- Protected Routes

## 📰 Hacker News Stories
- Fetch trending Hacker News stories
- Display story details
- Responsive story cards
- Smooth UI animations

## 🔖 Bookmark System
- Add bookmarks
- Remove bookmarks
- Dedicated bookmarks page
- User-specific saved stories

## 🎨 Premium UI
- Modern dark theme
- Glassmorphism design
- Responsive layout
- Framer Motion animations
- Toast notifications
- Professional navbar

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Framer Motion
- React Hot Toast
- React Icons
- Vite

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- CORS
- Web Scraping
- Cheerio

---

# 📂 Project Structure

## Backend

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── package.json
└── server.js
Frontend
frontend/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── package.json
└── vite.config.js

⚙️ Installation & Setup
1️⃣ Clone Repositories
Backend
git clone https://full-stack-task-backend.onrender.com
Frontend
git clone https://full-stack-task-frontend.vercel.app/
🔧 Backend Setup
Install Dependencies
npm install
Create .env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start Backend Server
npm run dev

Backend runs on:
http://localhost:5000

💻 Frontend Setup
Install Dependencies
npm install
Configure API URL
src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;
Start Frontend
npm run dev

Frontend runs on:

http://localhost:5173

🚀 Deployment
Frontend Deployment
Vercel
Backend Deployment
Render
📸 Screenshots
Home Page

Add screenshot here

Login Page

Add screenshot here

Bookmarks Page

Add screenshot here

🔥 Future Improvements
Search functionality
Pagination
Dark/light mode
AI-powered recommendations
Real-time updates

👨‍💻 Author
Ankush Kumar

⭐ If you like this project

Give this repository a star ⭐