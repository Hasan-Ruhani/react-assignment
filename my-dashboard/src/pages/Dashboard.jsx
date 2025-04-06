import { useState, useEffect } from "react";
import { FaCreditCard, FaPaperPlane } from "react-icons/fa";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, LineElement, PointElement);

const barData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Deposit",
      data: [5000, 30000, 40000, 50000, 60000, 10000, 15000],
      backgroundColor: "#2D6EF6",
    },
    {
      label: "Withdraw",
      data: [10000, 5000, 7000, 10000, 15000, 8000, 5000],
      backgroundColor: "#00C49F",
    },
  ],
};

// Dummy data for expense statistics (pie chart)
const pieData = {
  labels: ["Bill", "Investment", "Entertainment", "Others"],
  datasets: [
    {
      data: [35, 10, 30, 20],
      backgroundColor: ["#365CF5", "#FFA500", "#FF1493", "#6A5ACD"],
    },
  ],
};

// Prevent balanceData infinite expansion
const balanceData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Balance", // Ensure label is correctly defined
      data: [100, 250, 200, 400, 600, 800, 500, 700, 600, 650], // Data must match labels
      borderColor: "#2D6EF6",
      backgroundColor: "rgba(45, 110, 246, 0.1)",
      fill: true,
      tension: 0.4, // Smooth curve
      pointRadius: 4, // Make points visible
      pointBackgroundColor: "#2D6EF6",
    },
  ],
};


const balanceChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Prevents infinite graph size issue
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 1000, // Limit y-axis range
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

export default function Dashboard() {

  const [transactions, setTransactions] = useState(null);

  useEffect(() => {

    
    // Fetch Weekly Activity
    fetch("https://inertia-pos.manirul.xyz/api/recent-transactions-list")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          setTransactions(data.data);
        }
      });
    
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Existing UI */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <button className="text-blue-600">See All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Existing Cards */}
        <div className="bg-gradient-to-br bg-blue-700 to-blue-500 text-white rounded-[25px] shadow-md relative overflow-hidden">
          <div className="absolute inset-0 mt-[180px] bg-white/15"></div>
          <div className="flex absolute ml-[230px] mt-[194px]">
              <div className="absolute bg-white/40 w-8 h-8 rounded-full"></div>
              <div className="absolute bg-white/40 w-8 h-8 rounded-full translate-x-4"></div>
           </div>

          {/* Foreground Content */}
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <h3 className="text-3xl font-bold">$5,000</h3>
              </div>
              <FaCreditCard className="text-4xl opacity-80" />
            </div>

            <div className="flex justify-between mt-5">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="text-lg font-semibold">Rasel Ahmed</p>
              </div>
              <div>
                <p className="text-xs opacity-80">VALID THRU</p>
                <p className="text-lg font-semibold">27/10</p>
              </div>
            </div>
          </div>
            <p className="text-xl tracking-widest font-semibold p-6">8884 **** 999</p>
        </div>


        {/* Second Card */}
        <div className="bg-gradient-to-br bg-white to-blue-500 text-black rounded-[25px] shadow-md relative overflow-hidden">
          <div className="absolute inset-0 mt-[180px] bg-gray-500/15"></div>
          <div className="flex absolute ml-[230px] mt-[194px]">
              <div className="absolute bg-gray-500/40 w-8 h-8 rounded-full"></div>
              <div className="absolute bg-gray-500/40 w-8 h-8 rounded-full translate-x-4"></div>
           </div>

          {/* Foreground Content */}
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Balance</p>
                <h3 className="text-3xl font-bold">$2,000</h3>
              </div>
              <FaCreditCard className="text-gray-500 text-4xl" />
            </div>

            <div className="flex justify-between mt-5">
              <div>
                <p className="text-xs opacity-80">CARD HOLDER</p>
                <p className="text-lg font-semibold">Saiful Alam</p>
              </div>
              <div>
                <p className="text-xs opacity-80">VALID THRU</p>
                <p className="text-lg font-semibold">26/10</p>
              </div>
            </div>
          </div>
            <p className="text-xl tracking-widest font-semibold p-6">1234 **** 999</p>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {transactions ? (
              transactions.map((txn, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                  <img src={`//inertia-pos.manirul.xyz/images/${txn.image}`} alt="User" className="w-10 h-10 rounded-full object-cover" />

                    <div>
                      <p className="text-sm font-medium">{txn.name}</p>
                      <p className="text-xs text-gray-500">{txn.date}</p>
                    </div>
                  </div>
                  <p className={txn.amount > 0 ? "text-green-500" : "text-red-500"}>
                    {txn.amount > 0 ? `+ $${txn.amount}` : `- $${Math.abs(txn.amount)}`}
                  </p>
                </div>
              ))
            ) : (
              <p>Loading Transactions...</p>
            )}
          </div>
        </div>
      </div>

      {/* Transaction & Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Weekly Activity (Bar Chart) */}
        <div className="bg-white p-5 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
          <Bar data={barData} />
        </div>

        {/* Expense Statistics (Pie Chart) */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Expense</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Quick Transfer & Balance History Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_auto] gap-6 mt-8">
        {/* Quick Transfer */}
        <div className="relative bg-white p-6 rounded-xl shadow-md w-full lg:w-[400px] overflow-hidden">
          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Quick Transfer</h3>
            <div className="flex items-center space-x-4">
              {/* Profile Images */}
              <div className="flex space-x-2">
                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Livia"
                    className="w-20 h-20 rounded-full object-cover border-2 border-white"
                  />
                  <div className="flex flex-col items-center text-sm font-semibold">
                    <p className="text-black">Livia Bator</p>
                    <p className="text-xs text-gray-500">CEO</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Randy"
                    className="w-20 h-20 rounded-full object-cover border-2 border-white"
                  />
                  <div className="flex flex-col items-center text-sm font-semibold">
                    <p className="text-gray-800">Randy Press</p>
                    <p className="text-xs text-gray-500">Director</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/46.jpg"
                    alt="Workman"
                    className="w-20 h-20 rounded-full object-cover border-2 border-white"
                  />
                  <div className="flex flex-col items-center text-sm font-semibold">
                    <p className="text-gray-800">Workman</p>
                    <p className="text-xs text-gray-500">Designer</p>
                  </div>
                </div>
              </div>
              {/* Arrow Icon */}
              <button className="w-14 h-14 flex items-center justify-center bg-gray-100 shadow-lg rounded-full">
                <span className="text-gray-500 text-lg">{">"}</span>
              </button>
            </div>
            {/* Amount Input & Send Button */}
            <div className="flex items-center mt-4">
              <p className="text-gray-500/50 font-semibold">Write Amount </p>
              <input
                type="text"
                className="bg-gray-100 px-4 py-2 rounded-full w-24 text-center text-gray-600"
                value="525."
                readOnly
              />
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full ml-3">
                <span>Send</span>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Balance History */}
        <div className="bg-white p-6 rounded-xl shadow-md w-full">
          <h3 className="text-lg font-semibold mb-4">Balance History</h3>
          <div className="h-64">
            <Line data={balanceData} options={balanceChartOptions} />
          </div>
        </div>
      </div>

    </div>
  );
}


