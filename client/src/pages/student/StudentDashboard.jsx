import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function StudentDashboard(){

  return(

    <div>

      <Navbar/>

      <div className="flex">

        <Sidebar/>

        <div className="flex-1 p-10 bg-gray-100 min-h-screen">

          <h1 className="text-3xl font-bold mb-4">
            Student Dashboard
          </h1>

          <p className="text-gray-600">
            Welcome to the Smart Attendance System
          </p>

        </div>

      </div>

    </div>

  )
}

export default StudentDashboard