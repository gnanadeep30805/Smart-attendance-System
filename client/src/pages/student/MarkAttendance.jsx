function MarkAttendance() {

  const markAttendance = () => {
    navigator.geolocation.getCurrentPosition((position) => {

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude, longitude);

    });
  };

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold">
        Mark Attendance
      </h2>

      <button
        onClick={markAttendance}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded"
      >
        Mark Attendance
      </button>

    </div>
  );
}

export default MarkAttendance;