import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";

function MarkAttendance() {

  const markAttendance = () => {
    navigator.geolocation.getCurrentPosition((position) => {

      const { latitude, longitude } = position.coords;

      console.log(latitude, longitude);

    });
  };

  return (
    <div>
      <Navbar />
      <div className="app-grid">
        <Sidebar />

        <main className="page">
          <div className="page-inner">
            <div className="card card-pad">
              <h2 className="page-title">Mark Attendance</h2>
              <p className="muted mt-2">
                When you’re in class, click below to capture your current location and mark your
                attendance.
              </p>

              <div className="mt-6">
                <button onClick={markAttendance} className="secondary-btn" type="button">
                  Mark Attendance
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MarkAttendance;