import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-white shadow-lg transition-transform transform z-50 w-64 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:w-64`}
        >
          <Sidebar />
        </div>

        {/* Overlay when Sidebar is open on Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto h-screen">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
