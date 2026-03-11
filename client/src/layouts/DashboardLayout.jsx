import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          {children}
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;