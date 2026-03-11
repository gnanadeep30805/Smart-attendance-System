import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

function StudentDashboard() {
  return (
    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="p-10 flex-1">

          <h1 className="text-3xl font-bold">
            Student Dashboard
          </h1>

          <p className="mt-4">
            Welcome to the Smart Attendance System
          </p>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;