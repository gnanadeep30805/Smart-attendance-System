import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function TeacherDashboard() {
  return (
    <div>

      <Navbar />

      <div className="app-grid">
        <Sidebar />

        <main className="page">
          <div className="page-inner">
            <div className="card card-pad">
              <h1 className="page-title">Teacher Dashboard</h1>
              <p className="muted mt-2">Manage attendance for your sections.</p>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}

export default TeacherDashboard;