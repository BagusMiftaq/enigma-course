import api from "../config/api";


export const getCourseById = (id) =>{
    return api.get("/courses/"+id);
}

export const getCourses = (page) => api.get("/courses", {
    params:{
        page
    }
})

export const addCourse = (data) => {
    return api.post("/courses", data, {
        headers : {
            "Content-type" : "multipart/form-data"
        }
    })
}

export const updateCourse = (course) => {
    return api.put("/courses/"+course.courseId, course);
}

export const deleteCourse = (id) => {
    return api.delete("/courses/"+id);
}