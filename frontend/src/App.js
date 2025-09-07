import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import DashBoard from './components/Dashboard'
import Register from './components/Register';
import Login from './components/Login'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/me").then((res) => {
      if (res.data.loggedIn) setUser(res.data.user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/"
          element={user ? <DashBoard user={user} setUser={setUser} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App