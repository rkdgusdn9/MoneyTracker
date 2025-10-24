import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Ledger from "./pages/Ledger";
import Summary from "./pages/Summary";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ledger" element={<Ledger />} />
        <Route path="/Summary" element={<Summary />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}
