import API from "./api";

export const markAttendance = (data) => {
  return API.post("/attendance/mark", data);
};

export const getAttendanceHistory = () => {
  return API.get("/attendance/history");
};