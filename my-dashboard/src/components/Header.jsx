import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="border rounded-full px-4 py-2 text-sm"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
        <FaBell className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}
