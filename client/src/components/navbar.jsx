import { useContext, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const isStudent = pathname.startsWith("/student");
  const isTeacher = pathname.startsWith("/teacher");

  const links = useMemo(() => {
    if (isStudent) {
      return [
        { to: "/student/dashboard", label: "Dashboard" },
        { to: "/student/mark-attendance", label: "Mark Attendance" },
        { to: "/student/history", label: "History" },
      ];
    }

    if (isTeacher) {
      return [
        { to: "/teacher/dashboard", label: "Dashboard" },
        { to: "/teacher/sections", label: "Sections" },
        { to: "/teacher/students", label: "Students" },
        { to: "/teacher/report", label: "Report" },
      ];
    }

    return [];
  }, [isStudent, isTeacher]);

  const onLogout = () => {
    auth?.logout?.();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Brand */}
        <Link
          to={isTeacher ? "/teacher/dashboard" : isStudent ? "/student/dashboard" : "/"}
          className="text-lg font-bold"
        >
          Smart Attendance
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">

          {links.map((l) => {
            const active = pathname === l.to;

            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 rounded text-sm transition
                ${
                  active
                    ? "bg-white text-blue-600"
                    : "text-white hover:bg-blue-500"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="ml-2 bg-red-500 hover:bg-red-600 px-3 py-2 rounded text-sm"
            type="button"
          >
            Logout
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;