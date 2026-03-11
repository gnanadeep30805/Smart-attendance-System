function AttendanceButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="secondary-btn"
      type="button"
    >
      Mark Attendance
    </button>
  );
}

export default AttendanceButton;