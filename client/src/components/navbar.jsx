import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Smart Attendance System
      </h1>

      <div className="flex gap-6">

        <Link to="/student/dashboard" className="hover:underline">
          Dashboard
        </Link>

        <Link to="/student/history" className="hover:underline">
          Attendance History
        </Link>

        <button className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;