import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Dashboard from "../pages/Dashboard/dashboard";
import Explore from "../pages/Explore/explore";
import Tools from "../pages/Tools/tools";
import Navbar from "../components/navbar/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/ferramentas" element={<Tools />} />
      </Routes>
    </BrowserRouter>
  );
}