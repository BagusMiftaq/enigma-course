import api from "../config/api"


export const getCourseTypeByName = (typeName) =>{
    return api.get("/course-types/?typeName="+typeName);
}

export const getCourseType = (page) => api.get("/course-types", {
    params:{
        page
    }
});

export const addCourseType = (data) => {
    return api.post("/course-types", data, {
        headers:{
            "Content-type" : "application/json"
        }
    })
}

export const updateType = (courseType) => {
    return api.put("/course-types/"+courseType.courseTypeId, courseType);
}

export const deleteType =(id)=>{
    return api.delete("/course-types/"+id);
}