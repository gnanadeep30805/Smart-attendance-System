import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudentDashboard from "./pages/student/StudentDashboard";
import MarkAttendance from "./pages/student/MarkAttendance";
import AttendanceHistory from "./pages/student/AttendanceHistory";

import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import SectionAttendance from "./pages/teacher/SectionAttendance";
import StudentList from "./pages/teacher/StudentList";
import AttendanceReport from "./pages/teacher/AttendanceReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/mark-attendance" element={<MarkAttendance />} />
        <Route path="/student/history" element={<AttendanceHistory />} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/sections" element={<SectionAttendance />} />
        <Route path="/teacher/students" element={<StudentList />} />
        <Route path="/teacher/report" element={<AttendanceReport />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;