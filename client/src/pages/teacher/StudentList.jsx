import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function StudentList() {
  return (
    <div>
      <Navbar />
      <div className="app-grid">
        <Sidebar />

        <main className="page">
          <div className="page-inner">
            <div className="card card-pad">
              <h2 className="page-title">Students in Section</h2>
              <p className="muted mt-2">Student list will appear here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentList;