import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();

  const isStudent = pathname.startsWith("/student");
  const isTeacher = pathname.startsWith("/teacher");

  const items = isTeacher
    ? [
        { to: "/teacher/dashboard", label: "Dashboard" },
        { to: "/teacher/sections", label: "Sections" },
        { to: "/teacher/students", label: "Students" },
        { to: "/teacher/report", label: "Report" },
      ]
    : isStudent
    ? [
        { to: "/student/dashboard", label: "Dashboard" },
        { to: "/student/mark-attendance", label: "Mark Attendance" },
        { to: "/student/history", label: "Attendance History" },
      ]
    : [];

  if (!items.length) return null;

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-5">

        {/* Title */}
        <h2 className="text-lg font-semibold mb-6">Menu</h2>

        {/* Menu Links */}
        <div className="space-y-2">
          {items.map((item) => {
            const active = pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-2 rounded transition 
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;