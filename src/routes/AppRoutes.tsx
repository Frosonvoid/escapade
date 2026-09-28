import { Routes, Route } from 'react-router-dom' //install react-router-dom (npm install react-router-dom)
import App from '../App'
import Login from '../views/Login'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Login />} />
    </Routes>
  )
}