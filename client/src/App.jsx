import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Quote from "./pages/Quote"
import Dashboard from "./components/Dashboard"
import Admin from "./pages/Admin"
import Users from "./components/Users"
import Bookings from "./components/Bookings"
import Vehicles from "./components/Vehicles"
import Comments from "./components/Comments"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/auth/admin" element={<Admin />} >
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App
123