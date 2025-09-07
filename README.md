

## 🚀 Features

- User Registration (email + password)
- Password hashing with **bcrypt**
- Login with sessions (cookie-based authentication)
- Stay logged in until logout
- Logout & clear session
- Protected **Dashboard** route (only accessible when logged in)
- SQLite database auto-created (`users.db`)

---

## 🛠 Tech Stack

- **Frontend:** React.js (CRA) + Axios + React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** SQLite (lightweight, file-based)
- **Authentication:** bcrypt, express-session, cookie-parser

---

## 📂 Project Structure

```
project-root/
│── backend/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   │   └── auth.js
│   ├── package.json
│
│── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       └── components/
│           ├── Register
│           ├── Login
│           └── Dashboard
│
└── README.md
```

---

## ⚙️ Setup & Run

### 1. Backend

```bash
cd backend
npm install
npm start
```
- Runs on `http://localhost:4000`
- Creates `users.db` automatically

### 2. Frontend

```bash
cd frontend
npm install
npm start
```
- Runs on `http://localhost:3000`
- Communicates with backend via Axios

---

## 📌 API Endpoints

### Register
```
POST /api/auth/register
Body: { email, password, name }
```

### Login
```
POST /api/auth/login
Body: { email, password }
```

### Logout
```
POST /api/auth/logout
```

### Dashboard (protected)
```
GET /api/auth/
```

---


## 🎥 Deliverables

- GitHub Repository Link
- Screen Recording (demo flow)

---

