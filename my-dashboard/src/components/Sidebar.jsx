import { Link, useLocation } from "react-router-dom";
import {
  FaChartPie,
  FaExchangeAlt,
  FaUser,
  FaBriefcase,
  FaCog,
  FaWallet,
} from "react-icons/fa";

export default function Sidebar({ closeSidebar }) {
  const location = useLocation(); // Get the current path

  // Sidebar Menu Items
  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaChartPie /> },
    { path: "/transactions", label: "Transactions", icon: <FaExchangeAlt /> },
    { path: "/accounts", label: "Accounts", icon: <FaUser /> },
    { path: "/investments", label: "Investments", icon: <FaBriefcase /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md p-5">
      {/* Logo with Icon */}
      <div className="flex items-center space-x-2 mb-6">
        <FaWallet className="text-blue-600 text-3xl" /> {/* Icon */}
        <h1 className="text-2xl font-bold text-blue-600">BankDash.</h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center px-4 py-2 rounded-md transition-all ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  <span
                    className={`mr-2 text-lg ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
