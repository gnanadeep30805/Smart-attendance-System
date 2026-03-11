import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requiredRole }) {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && role && role !== requiredRole) {
    return <Navigate to={role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"} replace />;
  }

  return children;
}

export default ProtectedRoute;