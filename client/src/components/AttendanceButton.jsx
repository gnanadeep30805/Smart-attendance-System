function AttendanceButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
    >
      Mark Attendance
    </button>
  );
}

export default AttendanceButton;