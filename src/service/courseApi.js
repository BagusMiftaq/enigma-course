import store from "../store/store";
import api from "../config/api";


export const getCourseById = (id) =>{
    console.log(store);
    const courseList = store.getState().courses?.courseList;

    return courseList.filter((course)=>{
        return course.courseId === id;
    })?.[0]
}

export const getCourseTypeById = (id) =>{
    console.log(store);
    const courseList = store.getState().coursesType?.typeList;

    return courseList.filter((courseType)=>{
        return courseType.courseTypeId === id;
    })?.[0]
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