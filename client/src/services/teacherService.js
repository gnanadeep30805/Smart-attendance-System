import API from "./api";

export const getSections = () => {
  return API.get("/teacher/sections");
};

export const getSectionAttendance = (section) => {
  return API.get(`/teacher/attendance/${section}`);
};