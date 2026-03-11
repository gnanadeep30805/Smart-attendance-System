import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-60 bg-gray-800 text-white p-5">

      <h2 className="text-xl font-bold mb-6">
        Menu
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/student/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/student/attendance" className="hover:text-gray-300">
            Mark Attendance
          </Link>
        </li>

        <li>
          <Link to="/student/history" className="hover:text-gray-300">
            Attendance History
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;