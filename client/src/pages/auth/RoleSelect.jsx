import { Link } from "react-router-dom";

function RoleSelect() {
  return (
    <div className="container-center">
      <div className="w-full max-w-3xl">
        <div className="card card-pad">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Smart Attendance
          </h1>
          <p className="muted text-center mt-2">Choose how you want to sign in.</p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/login/student" className="card card-pad hover:ring-slate-300 transition">
              <div className="text-lg font-semibold">Student</div>
              <div className="muted mt-1 text-sm">Mark attendance and view your history.</div>
              <div className="mt-5 inline-flex font-medium text-blue-700 hover:text-blue-800">
                Continue →
              </div>
            </Link>

            <Link to="/login/teacher" className="card card-pad hover:ring-slate-300 transition">
              <div className="text-lg font-semibold">Teacher</div>
              <div className="muted mt-1 text-sm">Manage sections, students, and reports.</div>
              <div className="mt-5 inline-flex font-medium text-blue-700 hover:text-blue-800">
                Continue →
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-5 text-center text-sm">
          <span className="muted">New here? </span>
          <Link className="font-medium text-blue-700 hover:text-blue-800" to="/register">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;

