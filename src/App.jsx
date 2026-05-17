import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Warehouse from "./pages/Warehouse";
import Attendance from "./pages/Attendance";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/SettingsPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/warehouse" element={<Warehouse />} />

        <Route path="/attendance" element={<Attendance />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<SettingsPage />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}