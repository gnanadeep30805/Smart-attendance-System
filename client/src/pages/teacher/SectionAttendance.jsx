import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function SectionAttendance() {
  return (
    <div>
      <Navbar />
      <div className="app-grid">
        <Sidebar />

        <main className="page">
          <div className="page-inner">
            <div className="card card-pad">
              <h2 className="page-title">Section Attendance</h2>
              <p className="muted mt-2">Teacher can view attendance for their section.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SectionAttendance;