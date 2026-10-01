import { Routes, Route } from 'react-router-dom' //install react-router-dom (npm install react-router-dom)
import App from '../App'
import Dashboard from '../views/Dashboard'

export default function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<App adminLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
