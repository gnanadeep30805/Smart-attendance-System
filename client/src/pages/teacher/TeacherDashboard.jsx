import Navbar from "../../components/navbar";

function TeacherDashboard() {
  return (
    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          Teacher Dashboard
        </h1>

        <p className="mt-4">
          Manage attendance for your sections.
        </p>

      </div>

    </div>
  );
}

export default TeacherDashboard;