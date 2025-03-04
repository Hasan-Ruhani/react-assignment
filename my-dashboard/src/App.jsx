import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
// import Transactions from "./pages/Transactions";
// import Accounts from "./pages/Accounts";
// import Investments from "./pages/Investments";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar (Hidden on mobile, visible on large screens) */}
        <div className={`fixed inset-y-0 left-0 bg-white shadow-md transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-64`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 lg:ml-64">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <div className="p-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/settings" element={<Settings />} /> */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
