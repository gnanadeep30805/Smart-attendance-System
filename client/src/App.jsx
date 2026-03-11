import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/auth/RoleSelect";
import StudentLogin from "./pages/auth/StudentLogin";
import TeacherLogin from "./pages/auth/TeacherLogin";
import Register from "./pages/auth/Register";

import StudentDashboard from "./pages/student/StudentDashboard";
import MarkAttendance from "./pages/student/MarkAttendance";
import AttendanceHistory from "./pages/student/AttendanceHistory";

import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import SectionAttendance from "./pages/teacher/SectionAttendance";
import StudentList from "./pages/teacher/StudentList";
import AttendanceReport from "./pages/teacher/AttendanceReport";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/teacher" element={<TeacherLogin />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/mark-attendance"
          element={
            <ProtectedRoute requiredRole="student">
              <MarkAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/history"
          element={
            <ProtectedRoute requiredRole="student">
              <AttendanceHistory />
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute requiredRole="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/sections"
          element={
            <ProtectedRoute requiredRole="teacher">
              <SectionAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/students"
          element={
            <ProtectedRoute requiredRole="teacher">
              <StudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/report"
          element={
            <ProtectedRoute requiredRole="teacher">
              <AttendanceReport />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;