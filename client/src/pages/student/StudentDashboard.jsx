import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <Navbar />

      {/* Layout */}
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          
          {/* Welcome Card */}
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-2">
              Student Dashboard
            </h1>

            <p className="text-gray-600">
              Welcome to the Smart Attendance System.
            </p>
          </div>

        </main>

      </div>
    </div>
  );
}

export default StudentDashboard;