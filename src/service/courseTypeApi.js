import api from "../config/api"

export const getCourseType = () => api.get("/course-types");